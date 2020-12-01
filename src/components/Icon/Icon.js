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
  badgeColor,
  badgePosition,
  children,
  fill,
  fillOpacity,
  glyphName,
  hasBadge,
  size,
  stroke,
  strokeOpacity,
  strokeWidth,
  ...props
}) {
  const deprecatedFields = {
    borderWidth: "strokeWidth",
    borderColor: "stroke",
    fillColor: "fill"
  };

  Object.keys(deprecatedFields).forEach(
    df =>
      props[df] !== undefined &&
      console.warn(
        `Use ${deprecatedFields[df]} rather than ${df}. ${df} will be deprecated in the next major version of gm-ui-components.`
      )
  );

  return (
    <StyledSVG
      aria-labelledby={ariaLabelledby}
      fill={fill}
      fillOpacity={fillOpacity}
      focusable="false"
      id={glyphName}
      size={size}
      stroke={stroke}
      strokeOpacity={strokeOpacity}
      strokeWidth={strokeWidth}
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
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  fill: PropTypes.string,
  fillOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  glyphName: PropTypes.string,
  hasBadge: PropTypes.bool,
  size: PropTypes.string,
  stroke: PropTypes.string,
  strokeOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Icon.defaultProps = {
  badgeColor: "red",
  badgePosition: { x: 46, y: 16 },
  fill: "currentColor",
  fillOpacity: 0.15,
  hasBadge: false,
  size: "1.7145em",
  stroke: "currentColor",
  strokeWidth: "1.00001px", // SVG strokes with vector-effect: non-scaling-stroke; tend to look very bad at 1px
  theme: keen
};

Icon.displayName = "Icon";
