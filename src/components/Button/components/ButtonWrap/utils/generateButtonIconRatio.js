import ICON_VIEWBOX_SIZE from "../../../../../style/styleVariables";

/**
 * Helper function that maps button sizes to numbers representing icon ratios
 *
 * @param {string} size
 * @returns number
 */
function mapSizeToButtonIconRatio(size) {
  switch (size) {
    case "xs":
      return 0.5;
    case "sm":
      return 0.75;
    case "lg":
      return 1.25;
    case "xl":
      return 1.5;
    case "normal":
    default:
      return 1;
  }
}

/**
 * Utility function that generates a CSS mixin containing button icon rulesets
 *
 * @param {string} size
 * @returns string
 */
function generateButtonIconRatio(size) {
  const viewboxSize = ICON_VIEWBOX_SIZE; // default viewbox size 24px
  const ratio = mapSizeToButtonIconRatio(size); // default ratio 1
  const viewboxDimensions = viewboxSize * ratio;
  return `> svg { width: ${/* sc-value */ viewboxDimensions}px; 
  height: ${/* sc-value */ viewboxDimensions}px; }`;
}

export default generateButtonIconRatio;
