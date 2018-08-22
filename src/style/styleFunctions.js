import {
  getLuminance,
  mix,
  darken,
  saturate,
  desaturate,
  parseToHsl,
  lighten
} from "polished";
import {
  DARK_ON_LIGHT_CONTRAST_ENHANCEMENT_RATIO,
  SPACING_BASE
} from "./styleVariables";

/**
 * Utility to generate a readable content color from the background color of an element
 *
 * @param {Object|string} backgroundColor - a Color libary object or a string containing a color hex
 * @param {number} contrast - a number between 0 and 1
 * @param {Object|string} intentColor  - an optional Color libary object or a string containing a color hex
 * Defaults to black or white depending on the luminosity of backgroundColor
 * @returns {Object} - A color library object
 */
export function contrastColor(backgroundColor, contrast, intentColor) {
  if (!backgroundColor) {
    throw new Error("contrastColor requires a backgroundColor");
  }
  // luminosity() => 0 is black, 1 is white.
  // if luminosity of color is closer to light, and intentColor is null, set the intentColor to black.  if luminosity is closer to dark, and intentColor is null, set the intentColor to white.
  if (getLuminance(backgroundColor) > 0.65) {
    intentColor = intentColor || "#000"; //black
    return mix(contrast, intentColor, backgroundColor);
  } else {
    let enhancedContrast = contrast * DARK_ON_LIGHT_CONTRAST_ENHANCEMENT_RATIO; // DARK_ON_LIGHT_CONTRAST_ENHANCEMENT_RATIO = 2
    intentColor = intentColor || "#FFF"; //white
    if (enhancedContrast > 1) {
      enhancedContrast = 1;
    }
    return mix(enhancedContrast, intentColor, backgroundColor);
  }
}

/**
 * Scales a string of a certain number of pixels according to a given factor
 *
 * @export
 * @param {number} factor
 * @returns {string} A string in the format "10px"
 */
export function spacingScale(factor) {
  return `${Math.round(parseInt(SPACING_BASE, 10) * factor)}px`;
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
