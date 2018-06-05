import { spacingScale } from "style/styleFunctions";

/**
 * Utility function that transforms an object containing different attributes
 * into a block of CSS attributes dealing with button size
 *
 * @param {any} {
 *   fontSizeMultiplier = 1,
 *   horizontalPaddingMultiplier = 1,
 *   verticalPaddingMultiplier = 1,
 *   textIsUppercase = false
 * }
 * @returns string
 */
function _buttonSizeStyleBlockGenerator({
  fontSizeMultiplier = 1,
  horizontalPaddingMultiplier = 1,
  verticalPaddingMultiplier = 1,
  textIsUppercase = false
}) {
  const fontSizeBase = 14;
  const borderRadiusBase = 3;
  const contentSpacingBase = parseInt(spacingScale(0.5), 10);
  return `
    font-size: ${Math.ceil(fontSizeBase * fontSizeMultiplier)}px;
    border-radius: ${borderRadiusBase}px;
    padding: ${contentSpacingBase *
      verticalPaddingMultiplier}px ${contentSpacingBase *
    horizontalPaddingMultiplier}px;
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
        fontSizeMultiplier: 0.5,
        horizontalPaddingMultiplier: 1.75,
        verticalPaddingMultiplier: 0.5,
        textIsUppercase: true
      });
    }
    case "sm": {
      return _buttonSizeStyleBlockGenerator({
        fontSizeMultiplier: 0.75,
        horizontalPaddingMultiplier: 1.75,
        verticalPaddingMultiplier: 0.5,
        textIsUppercase: true
      });
    }
    case "lg": {
      return _buttonSizeStyleBlockGenerator({
        fontSizeMultiplier: 1.25,
        horizontalPaddingMultiplier: 1.75,
        verticalPaddingMultiplier: 0.5,
        textIsUppercase: false
      });
    }
    case "xl": {
      return _buttonSizeStyleBlockGenerator({
        fontSizeMultiplier: 1.5,
        horizontalPaddingMultiplier: 1.75,
        verticalPaddingMultiplier: 0.5,
        textIsUppercase: false
      });
    }
    default:
    case "normal": {
      return _buttonSizeStyleBlockGenerator({
        fontSizeMultiplier: 1,
        horizontalPaddingMultiplier: 1.75,
        verticalPaddingMultiplier: 0.5,
        textIsUppercase: false
      });
    }
  }
}

export default generateButtonSize;
