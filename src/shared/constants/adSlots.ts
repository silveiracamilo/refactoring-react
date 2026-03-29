/**
 * Google AdSense Ad Slot Configuration
 *
 * This file contains all ad slot IDs and configurations used throughout the application.
 * Ad slots are registered with Google Tag Manager for dynamic ad loading.
 *
 * @note Update these IDs with your actual Google AdSense Publisher ID and slot numbers
 */

/**
 * Type definition for ad slot configuration
 */
export interface IAdSlotConfig {
  id: string;
  name: string;
  position: "top" | "bottom";
  width: number;
  height: number;
  responsive: boolean;
  format: "horizontal" | "vertical" | "square";
}

/**
 * Ad slot configurations for the application
 * Currently supports Google AdSense display ads
 */
export const AdSlots: Record<string, IAdSlotConfig> = {
  /**
   * Top banner ad slot - displayed between header and main content
   * Positioned for maximum visibility and engagement
   * Responsive design adapts to mobile, tablet, and desktop
   */
  TOP_BANNER: {
    id: "ca-pub-xxxxxxxxxxxxxxxx/xxxxxxxxxx", // Replace with actual AdSense slot ID
    name: "Top Banner Ad",
    position: "top",
    width: 728,
    height: 90,
    responsive: true,
    format: "horizontal",
  },

  /**
   * Bottom banner ad slot - displayed between main content and footer
   * Provides additional monetization without disrupting main content
   * Responsive design adapts to mobile, tablet, and desktop
   */
  BOTTOM_BANNER: {
    id: "ca-pub-xxxxxxxxxxxxxxxx/xxxxxxxxxx", // Replace with actual AdSense slot ID
    name: "Bottom Banner Ad",
    position: "bottom",
    width: 728,
    height: 90,
    responsive: true,
    format: "horizontal",
  },
};

/**
 * Get ad slot configuration by key
 * @param slotKey - The key of the ad slot (e.g., 'TOP_BANNER', 'BOTTOM_BANNER')
 * @returns The ad slot configuration object
 * @throws Error if slot key is not found
 */
export const getAdSlot = (slotKey: keyof typeof AdSlots): IAdSlotConfig => {
  const slot = AdSlots[slotKey];
  if (!slot) {
    throw new Error(`Ad slot configuration not found for key: ${slotKey}`);
  }
  return slot;
};

/**
 * Get all ad slot IDs configured in the application
 * @returns Array of all ad slot ID strings
 */
export const getAllAdSlotIds = (): string[] => {
  return Object.values(AdSlots).map((slot) => slot.id);
};

/**
 * Check if ad slot ID is configured
 * @param slotId - The Google AdSense slot ID to check
 * @returns True if slot ID is found in configuration
 */
export const isValidAdSlotId = (slotId: string): boolean => {
  return Object.values(AdSlots).some((slot) => slot.id === slotId);
};
