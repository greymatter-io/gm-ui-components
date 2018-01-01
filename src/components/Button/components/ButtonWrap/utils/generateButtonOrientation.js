import { spacingScale } from "style/styleFunctions";

/**
 * Utility function that generates a CSS mixin containing button orientation rulesets
 *
 * @param {string} [alignment="horizontal"]
 * @param {number} [spacingBase=0.5]
 * @returns string
 */
function generateButtonOrientation(
  alignment = "horizontal",
  spacingBase = 0.5
) {
  if (alignment === "horizontal") {
    return `
      flex-direction: row;
      > :not(:first-child) {
        margin-left: ${/* sc-value */ spacingScale(spacingBase)};
        flex-basis: auto;
      }
    `;
  } else if (alignment === "vertical") {
    return `
      flex-direction: column;
      padding-top: ${/* sc-value */ spacingScale(spacingBase)};
      > :not(:first-child) {
        margin-top: ${/* sc-value */ spacingBase / 2}px;
      }
    `;
  }
}

export default generateButtonOrientation;
