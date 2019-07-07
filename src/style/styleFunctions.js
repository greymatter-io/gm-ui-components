import { darken, saturate, desaturate, parseToHsl, lighten } from "polished";
import { css } from "styled-components";

/**
 * Scales a string of a certain number of pixels according to a given factor
 *
 * @export
 * @param {number} factor
 * @returns {string} A string in the format "10px"
 */
export function spacingScale(factor) {
  return css`
    ${({ theme }) =>
      `${Math.round(parseInt(theme.SPACING_BASE, 10) * factor)}px`}
  `;
}

// Darken the color, but add a touch of saturation for a more natural shadow look
export function darkenColor(color, percent) {
  if (parseToHsl(color).saturation > 0.1) {
    // If the element has any substantial color to it, then you can mess with the saturation
    return saturate(percent, darken(percent, color));
  } else {
    // Otherwise, don't add color where there wasn't any to start with
    return darken(percent, color);
  }
}

// Lighten the color, but wash out the color a bit, for a more natural highlighted look
export function lightenColor(color, percent) {
  if (parseToHsl(color).saturation > 0.1) {
    return desaturate(percent, lighten(percent, color));
  } else {
    // Otherwise, don't add color where there wasn't any to start with
    return lighten(percent, color);
  }
}
