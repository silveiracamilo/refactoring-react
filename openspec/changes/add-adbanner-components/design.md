## Context

The application is a React 19 + TypeScript + Vite educational platform for design patterns. GTM (Google Tag Manager) has already been integrated into the HTML head. The Template component uses Ant Design's Layout with Header, Sider (left navigation), Content, and Footer. Currently there are no ad placements configured. The application uses responsive design utilities (Tailwind classes with `!` overrides) and Ant Design theming system.

Current Template structure:
- Header: Fixed height with background image
- Sider: Left navigation menu (collapsible on mobile)
- Content: Main page content area with padding
- Footer: Static footer with attribution

## Goals / Non-Goals

**Goals:**
- Implement a reusable AdBanner component that can display Google AdSense ads
- Position 2 banners per page (top and bottom) for revenue optimization
- Maintain responsive design across all breakpoints
- Integrate seamlessly with existing GTM configuration
- Preserve Theme awareness (light/dark mode support)
- Ensure no breaking changes to existing component APIs

**Non-Goals:**
- Implement ad analytics or reporting beyond GTM
- Create admin dashboard for ad management
- Implement fallback content for ad blockers
- Modify GTM configuration or event tracking
- Support multiple language-specific ad strategies

## Decisions

### Decision 1: Component Location
**Choice**: Create AdBanner as a new shared component at `src/shared/components/AdBanner/AdBanner.tsx`

**Rationale**: 
- Follows existing project structure where reusable components live in `src/shared/components/`
- AdBanner is used across multiple pages via Template
- Keeps ad-related code isolated and maintainable

**Alternatives Considered**:
- Feature-based component: Would create coupling with specific features
- Inline styling: Less reusable and harder to maintain theme consistency

### Decision 2: Banner Placement Strategy
**Choice**: 
- Top banner: Between Header and Content (inside Layout, within Content padding)
- Bottom banner: Between Content and Footer (separate section after main content)

**Rationale**:
- Top position catches user attention immediately after page load
- Bottom position monetizes screen real estate without interfering with content
- Separating from Content ensures banners don't affect main content scrolling behavior
- Both placements follow industry standards for ad placement

**Alternatives Considered**:
- Sidebar placement: Would compete with navigation menu
- Floating overlay: Poor UX, would be intrusive
- In-content placement: Would disrupt reading experience

### Decision 3: GTM Integration
**Choice**: Use gtag.cmd.push() for ad slot registration with data attributes for slot IDs

**Rationale**:
- Works with existing GTM setup without additional configuration
- Allows dynamic ad slot management via component props
- Each banner instance can manage its own slot independently

**Alternatives Considered**:
- Global context provider: Unnecessary complexity for ad management
- Direct AdSense script tags: Would bypass GTM, defeating integration benefit

### Decision 4: Styling Approach
**Choice**: Use Tailwind CSS utility classes with Ant Design theme integration via `theme.useToken()`

**Rationale**:
- Consistent with existing codebase (using tailwind + component overrides)
- Supports theme switching (light/dark mode) automatically
- Responsive utilities built-in
- No new CSS framework dependencies

**Alternatives Considered**:
- Pure Ant Design components: Overengineered for simple container
- CSS Modules: Would require new file types and build configuration
- Inline styles: Not maintainable, poor theme support

### Decision 5: Responsive Behavior
**Choice**: AdBanner maintains fixed aspect ratio and uses responsive padding

**Rationale**:
- Google AdSense ads have standard sizes (300x250, 728x90, 300x600)
- Fixed aspect ratio prevents layout shift during ad load
- Responsive padding ensures proper spacing on all devices
- Content remains readable on small screens

**Alternatives Considered**:
- Variable sizing: Causes layout shift, poor CLS metrics
- Display: none on mobile: Loses mobile revenue opportunity

## Risks / Trade-offs

**Risk 1**: Layout shift during ad load
→ **Mitigation**: Reserve space with min-height constraint; use aspect-ratio CSS property

**Risk 2**: Ads may not load (network issues, ad blockers)
→ **Mitigation**: Graceful degradation - component renders empty container, no console errors

**Risk 3**: Banner height varies by ad type (responsive heights)
→ **Mitigation**: Use max-height and allow overflow: hidden as fallback

**Risk 4**: GTM initialization delay impacts ad load timing
→ **Mitigation**: Ensure GTM script loads in document head (already in place)

**Risk 5**: Theme switching causes ad re-render
→ **Mitigation**: Memoize component props to prevent unnecessary re-renders

## Open Questions

1. Should banners be conditionally hidden on certain page types (e.g., error pages)?
2. What are the exact Google AdSense slot IDs to use? (To be provided separately)
3. Should there be a way to disable/enable ads programmatically per route?
