import React from "react";
import PropTypes from "prop-types";

import IconBackground from "./components/IconBackground";
import IconBorder from "./components/IconBorder";
import StyledG from "./components/StyledG";
import StyledSVG from "./components/StyledSVG";
import Glyph from "./components/Glyphs";

Icon.propTypes = {
  ariaLabelledby: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  backgroundStyle: PropTypes.string,
  borderColor: PropTypes.string,
  borderOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderStyle: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  glyphColor: PropTypes.string,
  glyphName: PropTypes.string,
  glyphRatio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconRatio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  transform: PropTypes.string
};

/**
 * Renders an Icon with Glyph component passed in as props.children with any additional styling props
 * @param {any} { optional styling props}
 * @returns JSX elements
 */
export default function Icon({
  ariaLabelledby = "ariaLabelledby",
  backgroundColor = "currentColor",
  backgroundOpacity = "1",
  backgroundStyle,
  borderColor = "currentColor",
  borderOpacity = "1",
  borderStyle,
  borderWidth = "1",
  children,
  glyphColor = "currentColor",
  glyphName = "",
  glyphRatio = 1,
  iconRatio = "1",
  title = "",
  transform
}) {
  return (
    <StyledSVG
      aria-labelledby={ariaLabelledby}
      iconRatio={iconRatio}
      glyphColor={glyphColor}
      focusable="false"
    >
      {backgroundStyle && (
        <IconBackground
          name={backgroundStyle}
          backgroundColor={backgroundColor}
          backgroundOpacity={backgroundOpacity}
          ratio={iconRatio}
        />
      )}
      {borderStyle && (
        <IconBorder
          name={borderStyle}
          borderColor={borderColor}
          borderOpacity={borderOpacity}
          borderWidth={borderWidth}
          ratio={iconRatio}
        />
      )}
      <StyledG title={glyphName} ratio={glyphRatio}>
        <title>{title ? title : glyphName}</title>
        {children}
      </StyledG>
    </StyledSVG>
  );
}
