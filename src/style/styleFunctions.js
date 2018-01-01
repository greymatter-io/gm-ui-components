import polished from "polished";

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
  if (typeof backgroundColor === "string") {
    backgroundColor = Color(backgroundColor);
  }
  if (typeof intentColor === "string") {
    intentColor = Color(intentColor);
  }
  // luminosity() => 0 is black, 1 is white.
  // if luminosity of color is closer to light, and intentColor is null, set the intentColor to black.  if luminosity is closer to dark, and intentColor is null, set the intentColor to white.
  if (backgroundColor.luminosity() > 0.65) {
    intentColor = intentColor || Color("#000"); //black
    return backgroundColor.mix(intentColor, contrast);
  } else {
    let enhancedContrast = contrast * DARK_ON_LIGHT_CONTRAST_ENHANCEMENT_RATIO; // DARK_ON_LIGHT_CONTRAST_ENHANCEMENT_RATIO = 2
    intentColor = intentColor || Color("#FFF"); //white
    if (enhancedContrast > 1) {
      // enhancedContrast = 1
      enhancedContrast = 1;
    }
    return backgroundColor.mix(intentColor, contrast);
  }
}
