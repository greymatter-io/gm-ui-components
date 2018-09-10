import { spacingScale } from "style/styleFunctions";
import {
  FONT_SIZE_BASE,
  FONT_SIZE_XS,
  FONT_SIZE_SM,
  FONT_SIZE_LG,
  RADIUS_05
} from "style/styleVariables";

/**
 * Utility function that transforms an object containing different attributes
 * into a block of CSS attributes dealing with button size
 *
 * @param {any} {
 *   fontSize = 1,
 *   horizontalPadding = 1,
 *   verticalPadding = 1,
 *   textIsUppercase = false
 * }
 * @returns string
 */
function _buttonSizeStyleBlockGenerator({
  fontSize = 1,
  horizontalPadding = 1,
  verticalPadding = 1,
  textIsUppercase = false
}) {
  return `
    font-size: ${fontSize};
    border-radius: ${RADIUS_05};
    padding: ${verticalPadding} ${horizontalPadding};
    ${textIsUppercase ? "text-transform: uppercase;" : ""}
  `;
}

/**
 * Utility function that renders a block of CSS attributes for a
 * particular string (xs, sm, normal, lg, xl)
 *
 * @param {string} size
 * @returns
 */
function generateButtonSize(size) {
  switch (size) {
    case "xs": {
      return _buttonSizeStyleBlockGenerator({
        fontSize: FONT_SIZE_XS,
        horizontalPadding: spacingScale(1),
        verticalPadding: spacingScale(0.25),
        textIsUppercase: true
      });
    }
    case "sm": {
      return _buttonSizeStyleBlockGenerator({
        fontSize: FONT_SIZE_SM,
        horizontalPadding: spacingScale(1),
        verticalPadding: spacingScale(0.25),
        textIsUppercase: true
      });
    }
    case "lg": {
      return _buttonSizeStyleBlockGenerator({
        fontSize: FONT_SIZE_LG,
        horizontalPadding: spacingScale(1.25),
        verticalPadding: spacingScale(0.25),
        textIsUppercase: false
      });
    }
    case "xl": {
      return _buttonSizeStyleBlockGenerator({
        fontSize: FONT_SIZE_LG,
        horizontalPadding: spacingScale(1.25),
        verticalPadding: spacingScale(0.25),
        textIsUppercase: false
      });
    }
    default:
    case "normal": {
      return _buttonSizeStyleBlockGenerator({
        fontSize: FONT_SIZE_BASE,
        horizontalPadding: spacingScale(1),
        verticalPadding: spacingScale(0.25),
        textIsUppercase: false
      });
    }
  }
}

export default generateButtonSize;
