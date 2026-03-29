# AdBanner Component

Reusable component for displaying Google AdSense advertisements with responsive design and theme awareness integration.

## Overview

The `AdBanner` component provides a simple, efficient way to display advertisements throughout your React application. It integrates seamlessly with Google Tag Manager and supports responsive design across all breakpoints.

## Features

- **Responsive Design**: Adapts to mobile, tablet, and desktop viewports
- **Theme Aware**: Automatically respects the application's Ant Design theme (light/dark mode)
- **GTM Integration**: Registers ad slots with Google Tag Manager via `gtag.cmd.push()`
- **Type Safe**: Full TypeScript support with proper prop interfaces
- **Accessible**: Maintains proper contrast ratios and semantic HTML structure
- **Customizable**: Supports custom CSS classes for additional styling

## Installation

The component is already integrated into the template layout. No additional installation required.

## Usage

### Basic Usage

```tsx
import AdBanner from '@/shared/components/AdBanner/AdBanner';
import { AdSlots } from '@/shared/constants/adSlots';

export function MyComponent() {
  return (
    <AdBanner 
      adSlotId={AdSlots.TOP_BANNER.id} 
      position="top"
    />
  );
}
```

### With Custom Styling

```tsx
<AdBanner 
  adSlotId={AdSlots.BOTTOM_BANNER.id} 
  position="bottom"
  className="custom-shadow-lg custom-border"
/>
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `adSlotId` | `string` | Yes | - | Google AdSense slot ID (e.g., `ca-pub-xxxxxxxxxxxxxxxx/xxxxxxxxxx`) |
| `position` | `"top" \| "bottom"` | No | `"bottom"` | Banner position for styling and GTM context |
| `className` | `string` | No | `""` | Additional CSS classes to apply to the banner container |

## Responsive Behavior

The component automatically adjusts its sizing and spacing across breakpoints:

- **Mobile** (`< 768px`): Compact padding, optimized for small screens
- **Tablet** (`768px - 1024px`): Medium padding, balanced layout
- **Desktop** (`> 1024px`): Full-size padding, standard ad dimensions

## Theme Integration

The component uses Ant Design's `theme.useToken()` hook to:

- Match the application's color scheme
- Support light/dark mode switching without additional configuration
- Maintain proper contrast ratios for accessibility

## GTM Integration

When the component mounts, it automatically:

1. Calls `window.gtag.cmd.push()` to register the ad slot
2. Sends an `ads_ready` event with the slot ID and position
3. Allows GTM to dynamically load and serve ads

### Example GTM Event

```javascript
{
  event: "ads_ready",
  ad_slot_id: "ca-pub-xxxxxxxxxxxxxxxx/xxxxxxxxxx",
  position: "top"
}
```

## Configuration

Ad slot IDs and configurations are stored in `src/shared/constants/adSlots.ts`:

```tsx
export const AdSlots = {
  TOP_BANNER: {
    id: "ca-pub-xxxxxxxxxxxxxxxx/xxxxxxxxxx",
    name: "Top Banner Ad",
    position: "top",
    width: 728,
    height: 90,
    responsive: true,
    format: "horizontal"
  },
  BOTTOM_BANNER: {
    id: "ca-pub-xxxxxxxxxxxxxxxx/xxxxxxxxxx",
    name: "Bottom Banner Ad",
    position: "bottom",
    width: 728,
    height: 90,
    responsive: true,
    format: "horizontal"
  }
};
```

## Best Practices

1. **Update Ad Slot IDs**: Replace placeholder IDs in `adSlots.ts` with your actual Google AdSense Publisher ID and slot numbers

2. **Test Responsiveness**: Verify banner appearance on multiple devices before deployment

3. **Monitor Layout Shift**: Ensure ad containers have sufficient `minHeight` to prevent Cumulative Layout Shift (CLS)

4. **GTM Configuration**: Verify your Google Tag Manager is properly configured before ads will display

5. **Ad Review**: Submit your site for review in Google AdSense account if it's a new publisher

## Troubleshooting

### Ads Not Loading

1. Verify GTM is properly initialized in your HTML head
2. Check your Google AdSense account for approval status
3. Verify ad slot IDs are correct in `adSlots.ts`
4. Check browser console for GTM and AdSense errors
5. Use GTM Debug Mode to inspect the data layer

### Layout Shift

If you experience Cumulative Layout Shift:

1. Ensure `minHeight` prop is set on the banner container
2. Verify proper padding/margins are applied
3. Check that no CSS conflicts are affecting the banner

### Theme Colors Not Applying

1. Verify Ant Design theme provider is wrapping your application
2. Check that `theme.useToken()` hook is accessible
3. Ensure no conflicting CSS is overriding theme colors

## Related Files

- **Component**: `src/shared/components/AdBanner/AdBanner.tsx`
- **Configuration**: `src/shared/constants/adSlots.ts`
- **Template Integration**: `src/core/template/Template.tsx`
- **Types**: See `IAdBannerProps` interface in component file

## Support

For questions or issues related to the AdBanner component, please refer to the design specification or contact the development team.
