import { css } from "styled-components";
import { darken, readableColor } from "polished";

// Maps button types to a particular color
function generateButtonTypeColors(theme, type) {
  switch (type) {
    case "danger":
      return theme.COLOR_INTENT_DANGER;
    case "info":
      return theme.COLOR_INTENT_INFO;
    case "warning":
      return theme.COLOR_INTENT_WARNING;
    case "primary":
      return theme.COLOR_INTENT_HIGHLIGHT;
    default:
    case "default":
      return theme.COLOR_BACKGROUND_A;
  }
}

/**
 * Utility function that transforms an object containing different attributes
 * into a block of CSS attributes dealing with buton styles
 *
 * @param {any} {
 *   buttonBackgroundColorBase = COLOR_BACKGROUND_A,
 *   buttonBorderColorBase = COLOR_BACKGROUND_A,
 *   buttonLabelColorBase = contrastColor(COLOR_BACKGROUND_A, 100),
 * }
 * @returns string
 */
function generateButtonStyle(theme, type, renderBorder) {
  const baseColor = generateButtonTypeColors(theme, type);

  const colorStyles = css`
    background-color: ${baseColor};
    border-color: ${renderBorder ? darken(0.1, baseColor) : `transparent`};
    color: ${readableColor(
      darken(0.1, baseColor)
    )}; /* darkening the color first gives a more appealing result */
  `;

  return css`
    ${colorStyles};

    &:hover {
      filter: saturate(120%) brightness(95%);
    }

    &:active {
      transition-duration: 0s;
      filter: saturate(80%) brightness(90%) contrast(110%);
    }

    &:focus {
      z-index: 1;
    }

    &[disabled],
    &[disabled]:hover,
    &[disabled]:focus,
    &[disabled]:active {
      cursor: not-allowed;
      filter: saturate(0) opacity(70%);
    }
  `;
}

export default generateButtonStyle;
