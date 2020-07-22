import { css } from "styled-components";

/**
 * Utility function that renders a block of CSS attributes for a
 * particular string (xs, sm, normal, lg, xl)
 *
 * @param {string} size
 * @returns
 */
function generateButtonSize(size) {
  switch (size) {
    case "xs":
      return css`
        font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_XS};
        padding: 0.25rem 1rem;
        border-radius: ${({ theme }) => theme.CORNER_RADIUS_INPUT};
        text-transform: uppercase;
      `;
    case "sm":
      return css`
        font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_SM};
        padding: 0.25rem 1rem;
        border-radius: ${({ theme }) => theme.CORNER_RADIUS_INPUT};
        text-transform: uppercase;
      `;
    case "lg":
      return css`
        font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
        padding: 0.25rem 1.25rem;
        border-radius: ${({ theme }) => theme.CORNER_RADIUS_INPUT};
      `;
    case "xl":
      return css`
        font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_XL};
        padding: 0.25rem 1.25rem;
        border-radius: ${({ theme }) => theme.CORNER_RADIUS_INPUT};
      `;
    default:
    case "normal":
      return css`
        font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
        padding: 0.25rem 1rem;
        border-radius: ${({ theme }) => theme.CORNER_RADIUS_INPUT};
      `;
  }
}

export default generateButtonSize;
