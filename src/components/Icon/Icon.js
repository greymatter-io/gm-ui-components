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
  hasBadge,
  badgeColor,
  badgePosition,
  borderColor, // Deprecate
  borderWidth, // Deprecate
  children,
  fill,
  fillColor, // Deprecate
  fillOpacity,
  glyphName,
  size,
  stroke,
  strokeWidth,
  strokeOpacity,
  ...props
}) {

  if (borderWidth !== undefined) {
    console.warn("Use `strokeWidth` rather than `borderWidth`. `borderWidth` will be deprecated in the next major version.");
  }
  if (borderColor !== undefined) {
    console.warn("Use `stroke` rather than `borderColor`. `borderColor` will be deprecated in the next major version.");
  }
  if (fillColor !== undefined) {
    console.warn("Use `fill` rather than `fillColor`. `fillColor` will be deprecated in the next major version.");
  }

  return (
    <StyledSVG
      aria-labelledby={ariaLabelledby}
      focusable="false"
      size={size}
      id={glyphName}
      fill={fill}
      fillOpacity={fillOpacity}
      fillColor={fillColor} // Deprecate
      borderWidth={borderWidth} // Deprecate
      borderColor={borderColor} // Deprecate
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeOpacity={strokeOpacity}
      {...props}
    >
      {hasBadge && (
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
      <g className="glyph" mask={hasBadge ? "url(#badgeMask)" : undefined}>
        {children}
      </g>
      {hasBadge && (
        <circle
          className="badge"
          cx={badgePosition.x}
          cy={badgePosition.y}
          r="10"
          fillOpacity="1"
          fill={badgeColor}
        />
      )}
    </StyledSVG>
  );
}

Icon.propTypes = {
  ariaLabelledby: PropTypes.string,
  badgeColor: PropTypes.string,
  badgePosition: PropTypes.object,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  fill: PropTypes.string,
  fillOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  glyphName: PropTypes.string,
  hasBadge: PropTypes.bool,
  size: PropTypes.string,
  // Deprecated
  borderColor: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fillColor: PropTypes.string,
};

Icon.defaultProps = {
  theme: keen,
  hasBadge: false,
  badgePosition: {
    x: 46,
    y: 16
  },
  badgeColor: "red",
  borderColor: "currentColor",
  borderWidth: "1.00001px", // SVG strokes with vector-effect: non-scaling-stroke; tend to look very bad at 1px
  stroke: "currentColor",
  strokeWidth: "1.00001px", // SVG strokes with vector-effect: non-scaling-stroke; tend to look very bad at 1px
  fillColor: "currentColor",
  fill: "currentColor",
  fillOpacity: 0.15,
  size: "1.7145em"
};

Icon.displayName = "Icon";
