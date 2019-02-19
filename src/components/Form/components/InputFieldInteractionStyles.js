import { css } from "styled-components";

import {
  COLOR_INTENT_HIGHLIGHT,
  OPACITY_50,
  COLOR_INTENT_DANGER,
  COLOR_BACKGROUND_A,
  COLOR_BACKGROUND_B,
  COLOR_INTENT_SUCCESS,
  OPACITY_15
} from "style/styleVariables";
import { transparentize, mix } from "polished";

export const FORM_HIGHLIGHT_SIZE = 2.5;

export function formInteractionStyles() {
  return css`
    &:invalid {
      box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent;

      &:required {
        background-color: ${mix(
          OPACITY_15,
          COLOR_INTENT_DANGER,
          COLOR_BACKGROUND_A
        )};
      }
    }

    &:required {
    }

    &:disabled {
      background-color: ${COLOR_BACKGROUND_B};
    }

    &:valid {
      &:required {
        background-color: ${mix(
          OPACITY_15,
          COLOR_INTENT_SUCCESS,
          COLOR_BACKGROUND_A
        )};

        &[type="checkbox"],
        &[type="radio"] {
          &:after {
            border-color: ${({ theme }) =>
              theme.brandColor || COLOR_INTENT_HIGHLIGHT};
          }
        }
      }
    }

    /* Need to explicitly choose inputs to style */
    &:read-only[type="text"],
    &:read-only[type="password"],
    &:read-only[type="search"],
    &:read-only[type="url"],
    &:read-only[type="tel"],
    &:read-only[type="number"],
    &:read-only[type="email"] {
      border-style: dashed !important;
    }

    &:hover {
    }

    &:focus,
    &:focus:active {
      outline: none;
      border: ${({ theme }) =>
        css`1px solid ${theme.brandColor || COLOR_INTENT_HIGHLIGHT}`};
      box-shadow: ${({ theme }) =>
        css`0 0 0 ${FORM_HIGHLIGHT_SIZE}px ${transparentize(
          1 - OPACITY_50,
          theme.brandColor || COLOR_INTENT_HIGHLIGHT
        )}`};
    }

    &:active {
    }
  `;
}
