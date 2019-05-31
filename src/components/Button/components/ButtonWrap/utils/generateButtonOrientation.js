import { css } from "styled-components";

/**
 * Utility function that generates a CSS mixin containing button orientation rulesets
 *
 * @param {string} [alignment="horizontal"]
 * @returns string
 */
function generateButtonOrientation(alignment = "horizontal") {
  if (alignment === "horizontal") {
    return css`
      flex-direction: row;
      > :not(:first-child) {
        flex-basis: auto;
      }
    `;
  } else if (alignment === "vertical") {
    return css`
      flex-direction: column;
    `;
  }
}

export default generateButtonOrientation;
