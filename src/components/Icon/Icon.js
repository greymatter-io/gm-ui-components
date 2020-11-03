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
  hasBadge,
  badgeColor,
  badgePosition,
  borderColor,
  borderWidth,
  isNegated,
  negationLineTrim,
  negationLineAngle,
  negationLineWidth,
  children,
  fillColor,
  fillOpacity,
  glyphName,
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
      focusable="false"
      size={size}
      id={glyphName}
      fillColor={fillColor}
      fillOpacity={fillOpacity}
      borderWidth={borderWidth}
      borderColor={borderColor}
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
                x1={IconGridSize - negationLineTrim}
                y1={IconGridSize - negationLineTrim}
                x2={negationLineTrim}
                y2={negationLineTrim}
                stroke="black"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                strokeWidth={"calc(" + negationLineWidth + " * 3)"}
                transform={negationLineAngle ? "rotate(" + negationLineAngle + " " + IconGridSize / 2 + " " + IconGridSize / 2 + ")" : undefined}
              />
            )}
            {hasBadge && (
              <circle
                className="maskHideArea"
                cx={badgePosition.x}
                cy={badgePosition.y}
                r="8"
                fill="black"
                fillOpacity="1"
              />
            )}
          </mask>
      )}
      <g
        className="glyph"
        transform="rotate(0.0001"
        mask={(isNegated || hasBadge) ? "url(#" + iconMaskId + ")" : undefined}>
        {children}
      </g>
      {isNegated && (
          <line
            className="negationLine"
            x1={IconGridSize - negationLineTrim}
            y1={IconGridSize - negationLineTrim}
            x2={negationLineTrim}
            y2={negationLineTrim}
            stroke="currentColor"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeWidth={negationLineWidth}
            transform={negationLineAngle ? "rotate(" + negationLineAngle + " " + IconGridSize / 2 + " " + IconGridSize / 2 + ")" : undefined}
          />
      )}
      {hasBadge && (
        <>
          <circle
            className="badge"
            cx={badgePosition.x}
            cy={badgePosition.y}
            r="5"
            fillOpacity="1"
            fill={badgeColor}
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
  negationLine: PropTypes.object,
  negationLineTrim: PropTypes.number,
  negationLineWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.string
};

Icon.defaultProps = {
  theme: keen,
  hasBadge: false,
  isNegated: false,
  negationLineTrim: 12,
  badgePosition: {
    x: 46,
    y: 16
  },
  badgeColor: "red",
  borderColor: "currentColor",
  borderWidth: "1.00001px", // SVG strokes with vector-effect: non-scaling-stroke; tend to look very bad at 1px
  fillColor: "currentColor",
  fillOpacity: 0.15,
  size: "1.7145em"
};

Icon.displayName = "Icon";
