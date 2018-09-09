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
  return `

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

    &:valid {
      &:required {
        background-color: ${mix(
          OPACITY_15,
          COLOR_INTENT_SUCCESS,
          COLOR_BACKGROUND_A
        )};
      }
    }

    &:readonly {
      /* Need to explicitly choose inputs to style */
      &[type="text"],
      &[type="password"],
      &[type="search"],
      &[type="url"],
      &[type="tel"],
      &[type="number"],
      &[type="email"] {
        border-style: dashed;
      }
    }

    &:disabled {
      background-color: ${COLOR_BACKGROUND_B};
    }

    &:hover { }

    &:focus,
    &:focus:active {
      outline: none;
      border: 1px solid ${COLOR_INTENT_HIGHLIGHT};
      box-shadow: 0 0 0 ${FORM_HIGHLIGHT_SIZE}px
        ${transparentize(1 - OPACITY_50, COLOR_INTENT_HIGHLIGHT)};
    }

    &:active { }
  `;
}
