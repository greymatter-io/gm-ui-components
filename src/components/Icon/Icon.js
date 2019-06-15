import React from "react";
import PropTypes from "prop-types";

import StyledSVG from "./components/StyledSVG";
import { keen } from "style/theme";

/**
 * Renders an Icon wrapping a Glyph component with any additional styling props
 * @param {any} { optional styling props}
 * @returns JSX elements
 */
export default function Icon({
  ariaLabelledby,
  badge,
  badgeColor,
  badgePosition,
  borderColor,
  borderWidth,
  children,
  fillColor,
  fillOpacity,
  glyphName,
  title,
  size,
  ...props
}) {
  return (
    <StyledSVG
      aria-labelledby={ariaLabelledby || title}
      focusable="false"
      size={size}
      id={glyphName}
      fillColor={fillColor}
      fillOpacity={fillOpacity}
      borderWidth={borderWidth}
      borderColor={borderColor}
      {...props}
    >
      {badge && (
        <mask id="badgeMask" className="badgeMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="white"
            fillOpacity="1"
          />
          <circle
            cx={badgePosition.x}
            cy={badgePosition.y}
            r="15"
            fill="black"
            fillOpacity="1"
          />
        </mask>
      )}
      <g
        title={glyphName}
        className="glyph"
        mask={badge ? "url(#badgeMask)" : undefined}
      >
        <title>{title ? title : glyphName}</title>
        {children}
      </g>
      {badge && (
        <>
          <circle
            className="badge"
            cx={badgePosition.x}
            cy={badgePosition.y}
            r="10"
            fill-opacity="1"
            fill={badgeColor}
          />
        </>
      )}
    </StyledSVG>
  );
}

Icon.propTypes = {
  ariaLabelledby: PropTypes.string,
  badge: PropTypes.bool,
  badgeColor: PropTypes.string,
  badgePosition: PropTypes.object,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  fillColor: PropTypes.string,
  fillOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  glyphName: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string
};

Icon.defaultProps = {
  theme: keen,
  badge: false,
  badgePosition: {
    x: 46,
    y: 16
  },
  badgeColor: "red",
  borderColor: "currentColor",
  borderWidth: "1px",
  fillColor: "currentColor",
  fillOpacity: 0.15,
  size: "1.7145em"
};

Icon.displayName = "Icon";
