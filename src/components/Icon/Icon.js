import React from "react";
import PropTypes from "prop-types";

import IconBackground from "./components/IconBackground";
import IconBorder from "./components/IconBorder";
import StyledSVG from "./components/StyledSVG";

Icon.propTypes = {
  ariaLabelledby: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  backgroundSizeRatio: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  backgroundStyle: PropTypes.string,
  borderColor: PropTypes.string,
  borderOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderStyle: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.element,
  glyphColor: PropTypes.string,
  glyphName: PropTypes.string,
  glyphSizeRatio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};

Icon.defaultProps = {
  ariaLabelledby: "ariaLabelledby",
  backgroundColor: "currentColor",
  backgroundOpacity: 1,
  backgroundSizeRatio: 1,
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
  borderStyle,
  borderWidth,
  children,
  glyphColor,
  glyphName,
  glyphSizeRatio,
  title,
  ...props
}) {
  return (
    <StyledSVG
      aria-labelledby={ariaLabelledby}
      iconRatio={glyphSizeRatio}
      focusable="false"
      {...props}
    >
      {backgroundStyle && (
        <IconBackground
          name={backgroundStyle}
          backgroundColor={backgroundColor}
          backgroundOpacity={backgroundOpacity}
          ratio={glyphSizeRatio}
        />
      )}
      {borderStyle && (
        <IconBorder
          name={borderStyle}
          borderColor={borderColor}
          borderOpacity={borderOpacity}
          borderWidth={borderWidth}
          ratio={glyphSizeRatio}
        />
      )}
      <g title={glyphName} fill={glyphColor}>
        <title>{title ? title : glyphName}</title>
        {/* render a custom svg as children or a built in glyph */}
        {children}
      </g>
    </StyledSVG>
  );
}
