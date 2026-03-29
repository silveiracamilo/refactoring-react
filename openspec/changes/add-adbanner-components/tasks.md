## 1. Create AdBanner Component

- [x] 1.1 Create `src/shared/components/AdBanner/` directory
- [x] 1.2 Create AdBanner.tsx with TypeScript types and props interface
- [x] 1.3 Implement basic component structure with responsive container
- [x] 1.4 Add Tailwind CSS styling with theme awareness using `theme.useToken()`
- [x] 1.5 Implement ad slot registration via gtag.cmd.push()
- [x] 1.6 Add support for custom CSS classes via className prop
- [x] 1.7 Create AdBanner.module.css or use inline Tailwind for spacing
- [x] 1.8 Add JSDoc comments and TypeScript documentation

## 2. Configure Ad Slots

- [x] 2.1 Determine Google AdSense slot IDs (top and bottom placements)
- [x] 2.2 Create constants file: `src/shared/constants/adSlots.ts` with slot configuration
- [x] 2.3 Add slot ID types and configurations for both banner positions

## 3. Integrate Banners into Template

- [x] 3.1 Import AdBanner component in Template.tsx
- [x] 3.2 Add top banner below Header and above main Content area
- [x] 3.3 Add bottom banner after Content and before Footer
- [x] 3.4 Pass appropriate props (adSlotId) to each banner instance
- [x] 3.5 Test responsive behavior on mobile, tablet, desktop breakpoints
- [x] 3.6 Verify banners don't cause layout shift (proper spacing/min-height)

## 4. Theme Integration & Responsive Design

- [x] 4.1 Test banner rendering in light mode with theme colors
- [x] 4.2 Test banner rendering in dark mode with proper contrast
- [x] 4.3 Verify responsive behavior: mobile (< 768px), tablet (768-1024px), desktop (> 1024px)
- [x] 4.4 Ensure proper padding/margins on all breakpoints
- [x] 4.5 Validate that Sider menu collapse doesn't affect banner layout

## 5. GTM Integration Testing

- [x] 5.1 Verify gtag commands execute when banners mount
- [x] 5.2 Confirm ad slots appear in GTM data layer
- [ ] 5.3 Test ad loading in browser with GTM debug mode
- [x] 5.4 Verify no console errors during ad load/render

## 6. Code Quality & Documentation

- [x] 6.1 Verify TypeScript compilation (no errors, all types defined)
- [ ] 6.2 Add storybook story for AdBanner component (optional)
- [x] 6.3 Create README.md in AdBanner directory with usage documentation
- [x] 6.4 Run ESLint and fix any warnings
- [x] 6.5 Document props interface and exported types

## 7. Verify Functionality Across Pages

- [x] 7.1 Navigate through different pages and verify banners load
- [x] 7.2 Test banner persistence during route changes
- [x] 7.3 Verify no ad duplication across page navigation
- [x] 7.4 Test on pages with minimal content
- [x] 7.5 Test on pages with large content

## 8. Build & Deployment Check

- [x] 8.1 Run: `npm run build` and verify no errors
- [x] 8.2 Check built bundle for AdBanner component code
- [x] 8.3 Verify ad scripts load in production build
- [ ] 8.4 Create git commit with all changes
