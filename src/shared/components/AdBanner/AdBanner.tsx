import { theme } from "antd";
import React, { useEffect } from "react";

/**
 * Props interface for the AdBanner component
 * @interface IAdBannerProps
 * @property {string} adSlotId - Google AdSense slot ID for this banner
 * @property {string} [className] - Additional CSS classes to apply to the banner container
 * @property {string} [position] - Position of the banner ('top' or 'bottom') for styling purposes
 */
interface IAdBannerProps {
  adSlotId: string;
  className?: string;
  position?: "top" | "bottom";
}

/**
 * AdBanner Component
 *
 * A reusable component that displays Google AdSense advertisements with responsive design
 * and theme awareness. The component integrates with Google Tag Manager for ad slot management.
 *
 * @component
 * @example
 * // Render a top banner with specific ad slot ID
 * <AdBanner adSlotId="ca-pub-1234567890123456" position="top" />
 *
 * @param {IAdBannerProps} props - Component props
 * @returns {React.ReactElement} A responsive advertisement banner container
 */
const AdBanner: React.FC<IAdBannerProps> = ({
  adSlotId,
  className = "",
  position = "bottom",
}) => {
  const { token } = theme.useToken();

  /**
   * Register ad slot with Google Tag Manager when component mounts
   * Pushes ad slot ID to gtag command queue for AdSense setup
   */
  useEffect(() => {
    // Register ad slot with GTM
    const gtagWindow = window as unknown as { gtag?: { cmd: { push: (fn: () => void) => void } } };
    if (gtagWindow.gtag?.cmd) {
      gtagWindow.gtag.cmd.push(() => {
        // Pushes ad slot to the data layer
        const gtagFn = window as unknown as { gtag?: (event: string, eventName: string, config: unknown) => void };
        gtagFn.gtag?.("event", "ads_ready", {
          ad_slot_id: adSlotId,
          position: position,
        });
      });
    }
  }, [adSlotId, position]);

  // Determine responsive padding based on position
  const paddingClass =
    position === "top" ? "px-2 sm:px-4 py-2 sm:py-4" : "px-2 sm:px-4 py-3 sm:py-5";

  return (
    <div
      className={`
        w-full
        flex
        justify-center
        items-center
        rounded-sm
        transition-colors
        duration-300
        ${paddingClass}
        ${className}
      `}
      style={{
        backgroundColor: token.colorBgLayout,
        borderColor: token.colorBorder,
        borderWidth: "1px",
        minHeight: position === "top" ? "100px" : "120px",
      }}
      data-ad-slot={adSlotId}
    >
      {/* Ad content will be injected here by Google AdSense script */}
      <div
        id={`adsbygoogle-${adSlotId}`}
        className="w-full h-full flex items-center justify-center text-sm text-gray-400"
      >
        {/* Placeholder for ad content - will be replaced by AdSense script */}
      </div>
    </div>
  );
};

export default AdBanner;
