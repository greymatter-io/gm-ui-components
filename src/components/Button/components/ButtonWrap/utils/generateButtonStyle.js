import { contrastColor } from "style/styleFunctions";
import {
  COLOR_BRAND_PRIMARY,
  COLOR_DANGER,
  COLOR_INFO,
  COLOR_WARNING,
  COLOR_CONTENT_BACKGROUND
} from "style/styleVariables";
import { darken } from "polished";

// Maps button types to a particular color
function generateButtonTypeColors(type) {
  switch (type) {
    case "danger":
      return {
        backgroundColor: COLOR_DANGER,
        borderColor: darken(0.1, COLOR_DANGER),
        labelColor: contrastColor(COLOR_DANGER, 1)
      };
    case "info":
      return {
        backgroundColor: COLOR_INFO,
        borderColor: darken(0.1, COLOR_INFO),
        labelColor: contrastColor(COLOR_INFO, 1)
      };
    case "warning":
      return {
        backgroundColor: COLOR_WARNING,
        borderColor: darken(0.1, COLOR_WARNING),
        labelColor: contrastColor(COLOR_WARNING, 1)
      };
    case "primary":
      return {
        backgroundColor: COLOR_BRAND_PRIMARY,
        borderColor: darken(0.1, COLOR_BRAND_PRIMARY),
        labelColor: contrastColor(COLOR_BRAND_PRIMARY, 1)
      };
    default:
    case "default":
      return {
        backgroundColor: COLOR_CONTENT_BACKGROUND,
        borderColor: darken(0.1, COLOR_CONTENT_BACKGROUND),
        labelColor: contrastColor(COLOR_CONTENT_BACKGROUND, 1)
      };
  }
}

/**
 * Utility function that transforms an object containing different attributes
 * into a block of CSS attributes dealing with buton styles
 *
 * @param {any} {
 *   buttonBackgroundColorBase = COLOR_WHITE,
 *   buttonBorderColorBase = COLOR_WHITE,
 *   buttonLabelColorBase = contrastColor(COLOR_WHITE, 100),
 * }
 * @returns string
 */
function generateButtonStyle(type, renderBorder) {
  const { backgroundColor, labelColor, borderColor } = generateButtonTypeColors(
    type
  );

  return `
  background-color: ${backgroundColor};
  color: ${labelColor};
  border-color: ${renderBorder ? borderColor : `transparent`};

  &:hover {
    filter: saturate(120%) brightness(95%);
  }

  &:active {
    transition-duration: 0s;
    filter: saturate(80%) brightness(90%) contrast(110%);
  }

  &:focus {
    z-index: 1;
  }

  &[disabled],
  &[disabled]:hover,
  &[disabled]:focus,
  &[disabled]:active {
    cursor: not-allowed;
    filter: saturate(0);
  }
`;
}

export default generateButtonStyle;
