/**
 * Utility function that generates a CSS mixin containing button orientation rulesets
 *
 * @param {string} [alignment="horizontal"]
 * @returns string
 */
function generateButtonOrientation(alignment = "horizontal") {
  if (alignment === "horizontal") {
    return `
      flex-direction: row;
      > :not(:first-child) {
        flex-basis: auto;
      }
    `;
  } else if (alignment === "vertical") {
    return `
      flex-direction: column;
    `;
  }
}

export default generateButtonOrientation;
