import {
  COLOR_WHITE,
  FONT_SIZE_BASE,
  FONT_STACK_BASE
} from "style/styleVariables";
import { contrastColor } from "style/styleFunctions";
import { css } from "styled-components";
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
function generateButtonStyle({
  buttonBackgroundColorBase = contrastColor(COLOR_WHITE, 0),
  buttonBorderColorBase = contrastColor(COLOR_WHITE, 0.2),
  buttonLabelColorBase = contrastColor(COLOR_WHITE, 1)
}) {
  return `
  background-color: ${buttonBackgroundColorBase};
  border-color: ${buttonBorderColorBase};
  color: ${buttonLabelColorBase};
  filter: ${props =>
    props.active
      ? `saturate(80%) brightness(90%) contrast(110%)`
      : `saturate(100 %) brightness(100 %)`};

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
    cursor: default;
    filter: saturation(0%);
  }
`;
}

export default generateButtonStyle;
