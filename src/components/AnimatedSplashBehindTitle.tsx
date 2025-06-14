
import React from "react";

type AnimatedSplashBehindTitleProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  splashClassName?: string;
  svgHeight?: string | number;
  svgWidth?: string | number;
};

export const AnimatedSplashBehindTitle = ({
  children,
  className = "",
  style,
  splashClassName = "",
  svgHeight = 56,
  svgWidth = 140,
}: AnimatedSplashBehindTitleProps) => (
  <span className={`relative inline-block ${className}`} style={style}>
    <span
      className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none ${splashClassName}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 140 56"
        width={svgWidth}
        height={svgHeight}
        className="animate-subtle-wobble"
        style={{ filter: "blur(0.2px)" }}
        focusable="false"
      >
        <path
          fill="url(#splash-gradient)"
          d="M71.9,8.5c7.5-5.4,20.7-7.7,32.4-6.6c12.4,1.2,22.7,6.3,26.2,13.4c2.5,4.7,1.1,10.3-3.2,14.9c-4.2,4.5-11.1,7.9-18.9,9.7
                  c-10.5,2.5-19.2,5-29,7.9c-12.9,4-19.7,8.9-35-1.2c-10.7-6.9-20.3-18.9-13.1-28C39.1,2.8,61.2,16.4,71.9,8.5z"
        />
        <defs>
          <linearGradient id="splash-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFA500" />
            <stop offset="55%" stopColor="#FF8C00" />
            <stop offset="100%" stopColor="#FF6347" />
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span className="relative z-10">{children}</span>
  </span>
);

export default AnimatedSplashBehindTitle;
