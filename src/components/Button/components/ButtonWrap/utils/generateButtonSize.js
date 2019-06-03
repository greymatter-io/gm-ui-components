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
  let style = "";
  switch (size) {
    case "xs": {
      style = css`
        font-size: ${props => props.theme.FONT_SIZE_XS};
        padding: ${spacingScale(0.25)} ${spacingScale(1)};
        border-radius: ${props => props.theme.RADIUS_05};
        text-transform: uppercase;
      `;
      break;
    }
    case "sm": {
      style = css`
        font-size: ${props => props.theme.FONT_SIZE_SM};
        padding: ${spacingScale(0.25)} ${spacingScale(1)};
        border-radius: ${props => props.theme.RADIUS_05};
        text-transform: uppercase;
      `;
      break;
    }
    case "lg": {
      style = css`
        font-size: ${props => props.theme.FONT_SIZE_BASE};
        padding: ${spacingScale(0.25)} ${spacingScale(1.25)};
        border-radius: ${props => props.theme.RADIUS_05};
      `;
      break;
    }
    case "xl": {
      style = css`
        font-size: ${props => props.theme.FONT_SIZE_LG};
        padding: ${spacingScale(0.25)} ${spacingScale(1.25)};
        border-radius: ${props => props.theme.RADIUS_05};
      `;
      break;
    }
    default:
    case "normal":
      style = css`
        font-size: ${props => props.theme.FONT_SIZE_BASE};
        padding: ${spacingScale(0.25)} ${spacingScale(1)};
        border-radius: ${props => props.theme.RADIUS_05};
      `;
      break;
  }
  return style;
}

export default generateButtonSize;
