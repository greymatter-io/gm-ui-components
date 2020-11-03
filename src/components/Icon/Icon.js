import React from "react";
import PropTypes from "prop-types";

import StyledSVG from "./components/StyledSVG";
import { keen } from "style/theme";

/**
 * Renders an Icon wrapping a Glyph component with any additional styling props
 * @param {any} { optional styling props}
 * @returns JSX elements
 */

const IconGridSize = 64;

export default function Icon({
  ariaLabelledby,
  badgeColor,
  badgePosition,
  borderColor,
  borderWidth,
  children,
  fillColor,
  fillOpacity,
  glyphName,
  hasBadge,
  isNegated,
  negationLineAngle,
  negationLineTrim,
  negationLineWidth,
  size,
  ...props
}) {

  const iconMaskId = glyphName + size + "iconMask";
  
  if (negationLineWidth === undefined) {
    if (borderWidth !== 0) {
      negationLineWidth = borderWidth
    } else {
      negationLineWidth = '1.0001px'
    }
  }

  return (
    <StyledSVG
      aria-labelledby={ariaLabelledby}
      borderColor={borderColor}
      borderWidth={borderWidth}
      fillColor={fillColor}
      fillOpacity={fillOpacity}
      focusable="false"
      id={glyphName}
      size={size}
      {...props}
    >
      {(isNegated || hasBadge) && (
        <mask id={iconMaskId}>
            <rect
              x="0"
              y="0"
              width={IconGridSize}
              height={IconGridSize}
              fill="white"
              fillOpacity="1"
            />
            {isNegated && (
              <line
                className="negationLine maskHideArea"
                stroke="black"
                strokeLinecap="round"
                strokeWidth={"calc(" + negationLineWidth + " * 3)"}
                transform={negationLineAngle ? "rotate(" + negationLineAngle + " " + IconGridSize / 2 + " " + IconGridSize / 2 + ")" : undefined}
                vectorEffect="non-scaling-stroke"
                x1={IconGridSize - negationLineTrim}
                x2={negationLineTrim}
                y1={IconGridSize - negationLineTrim}
                y2={negationLineTrim}
              />
            )}
            {hasBadge && (
              <circle
                className="maskHideArea"
                cx={badgePosition.x}
                cy={badgePosition.y}
                fill="black"
                fillOpacity="1"
                r="8"
              />
            )}
          </mask>
      )}
      <g
      className="glyph"
      mask={(isNegated || hasBadge) ? "url(#" + iconMaskId + ")" : undefined}
      transform="rotate(0.0001"
      >
        {children}
      </g>
      {isNegated && (
          <line
            className="negationLine"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={negationLineWidth}
            transform={negationLineAngle ? "rotate(" + negationLineAngle + " " + IconGridSize / 2 + " " + IconGridSize / 2 + ")" : undefined}
            vectorEffect="non-scaling-stroke"
            x1={IconGridSize - negationLineTrim}
            x2={negationLineTrim}
            y1={IconGridSize - negationLineTrim}
            y2={negationLineTrim}
          />
      )}
      {hasBadge && (
        <>
          <circle
            className="badge"
            cx={badgePosition.x}
            cy={badgePosition.y}
            fill={badgeColor}
            fillOpacity="1"
            r="5"
          />
        </>
      )}
    </StyledSVG>
  );
}

Icon.propTypes = {
  ariaLabelledby: PropTypes.string,
  badgeColor: PropTypes.string,
  badgePosition: PropTypes.object,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  fillColor: PropTypes.string,
  fillOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  glyphName: PropTypes.string,
  hasBadge: PropTypes.bool,
  isNegated: PropTypes.bool,
  negationLineAngle: PropTypes.number,
  negationLineTrim: PropTypes.number,
  negationLineWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.string,
};

Icon.defaultProps = {
  badgeColor: "red",
  badgePosition: {x: 46, y: 16},
  borderColor: "currentColor",
  borderWidth: "1.00001px", // SVG strokes with vector-effect: non-scaling-stroke; tend to look very bad at 1px
  fillColor: "currentColor",
  fillOpacity: 0.15,
  hasBadge: false,
  isNegated: false,
  negationLineTrim: 12,
  size: "1.7145em",
  theme: keen,
};

Icon.displayName = "Icon";
