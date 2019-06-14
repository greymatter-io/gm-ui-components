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
      borderWidth={borderWidth}
      borderColor={borderColor}
      {...props}
    >
      {badge && (
        <circle
          cx={badgePosition.x}
          cy={badgePosition.y}
          r="10"
          fill={badgeColor}
        />
      )}
      <g title={glyphName} className="glyph">
        <title>{title ? title : glyphName}</title>
        {children}
      </g>
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
  size: "1.714em"
};

Icon.displayName = "Icon";
