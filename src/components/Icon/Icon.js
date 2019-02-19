import React from "react";
import PropTypes from "prop-types";

import IconBackground from "./components/IconBackground";
import StyledSVG from "./components/StyledSVG";

Icon.propTypes = {
  ariaLabelledby: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  backgroundSizeRatio: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  backgroundStyle: PropTypes.oneOf([
    "BackgroundCircleSmall",
    "BackgroundSquareSmall",
    "BackgroundTriangleSmall",
    "BackgroundSquare",
    "BackgroundSquareBeveled",
    "BackgroundSquareRounded",
    "BackgroundSquareRoundedSmooth",
    "BackgroundTriangle"
  ]),
  borderColor: PropTypes.string,
  borderOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  glyphColor: PropTypes.string,
  glyphName: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string
};

Icon.defaultProps = {
  backgroundColor: "currentColor",
  backgroundOpacity: 1,
  borderColor: "currentColor",
  borderOpacity: 1,
  borderWidth: 1,
  glyph: "",
  glyphColor: "currentColor",
  glyphSizeRatio: 1
};

/**
 * Renders an Icon wrapping a Glyph component with any additional styling props
 * @param {any} { optional styling props}
 * @returns JSX elements
 */
export default function Icon({
  ariaLabelledby,
  backgroundColor,
  backgroundOpacity,
  backgroundStyle,
  borderColor,
  borderOpacity,
  borderWidth,
  children,
  glyphColor,
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
      {...props}
    >
      {backgroundStyle && (
        <IconBackground
          name={backgroundStyle}
          backgroundColor={backgroundColor}
          backgroundOpacity={backgroundOpacity}
          borderColor={borderColor}
          borderOpacity={borderOpacity}
          borderWidth={parseFloat(borderWidth, 10)}
        />
      )}
      <g title={glyphName} fill={glyphColor}>
        <title>{title ? title : glyphName}</title>
        {children}
      </g>
    </StyledSVG>
  );
}

Icon.displayName = "Icon";
