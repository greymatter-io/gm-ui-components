import React from "react";
import PropTypes from "prop-types";

import StyledSVG from "./components/StyledSVG";

Icon.propTypes = {
  ariaLabelledby: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  fillColor: PropTypes.string,
  fillOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  glyphName: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string
};

/**
 * Renders an Icon wrapping a Glyph component with any additional styling props
 * @param {any} { optional styling props}
 * @returns JSX elements
 */
export default function Icon({
  ariaLabelledby,
  borderColor,
  borderWidth,
  children,
  fillColor,
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
      <g title={glyphName}>
        <title>{title ? title : glyphName}</title>
        {children}
      </g>
    </StyledSVG>
  );
}

Icon.displayName = "Icon";

Icon.defaultProps = {
  borderColor: "currentColor",
  borderWidth: "1px",
  fillColor: "currentColor",
  fillOpacity: "currentColor",
  size: "1.714em"
};
