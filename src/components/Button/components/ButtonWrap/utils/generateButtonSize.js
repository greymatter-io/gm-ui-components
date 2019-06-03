import { spacingScale } from "style/styleFunctions";
import { css } from "styled-components";

/**
 * Utility function that renders a block of CSS attributes for a
 * particular string (xs, sm, normal, lg, xl)
 *
 * @param {string} size
 * @returns
 */
function generateButtonSize(size) {
  switch (size) {
    case "xs":
      return css`
        font-size: ${props => props.theme.FONT_SIZE_XS};
        padding: ${spacingScale(0.25)} ${spacingScale(1)};
        border-radius: ${props => props.theme.RADIUS_05};
        text-transform: uppercase;
      `;
    case "sm":
      return css`
        font-size: ${props => props.theme.FONT_SIZE_SM};
        padding: ${spacingScale(0.25)} ${spacingScale(1)};
        border-radius: ${props => props.theme.RADIUS_05};
        text-transform: uppercase;
      `;
    case "lg":
      return css`
        font-size: ${props => props.theme.FONT_SIZE_BASE};
        padding: ${spacingScale(0.25)} ${spacingScale(1.25)};
        border-radius: ${props => props.theme.RADIUS_05};
      `;
    case "xl":
      return css`
        font-size: ${props => props.theme.FONT_SIZE_LG};
        padding: ${spacingScale(0.25)} ${spacingScale(1.25)};
        border-radius: ${props => props.theme.RADIUS_05};
      `;
    default:
    case "normal":
      return css`
        font-size: ${props => props.theme.FONT_SIZE_BASE};
        padding: ${spacingScale(0.25)} ${spacingScale(1)};
        border-radius: ${props => props.theme.RADIUS_05};
      `;
  }
}

export default generateButtonSize;
