import { css } from "styled-components";

import { transparentize, mix } from "polished";

export const FORM_HIGHLIGHT_SIZE = 2.5;

export function formInteractionStyles() {
  return css`
    &:invalid {
      box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent;

      &:required {
        background-color: ${props =>
          mix(
            props.theme.OPACITY_LIGHTEST,
            props.theme.COLOR_INTENT_DANGER,
            props.theme.COLOR_BACKGROUND_DEFAULT
          )};
      }
    }

    &:required {
    }

    &:disabled {
      background-color: ${props => props.theme.COLOR_BACKGROUND_TWO};
    }

    &:valid {
      &:required {
        background-color: ${props =>
          mix(
            props.theme.OPACITY_LIGHTEST,
            props.theme.COLOR_INTENT_SUCCESS,
            props.theme.COLOR_BACKGROUND_DEFAULT
          )};

        &[type="checkbox"],
        &[type="radio"] {
          &:after {
            border-color: ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
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
      border: ${css`1px solid ${props => props.theme.COLOR_INTENT_HIGHLIGHT}`};
      box-shadow: ${css`0 0 0 ${FORM_HIGHLIGHT_SIZE}px ${props =>
        transparentize(
          1 - props.theme.OPACITY_LIGHTER,
          props.theme.COLOR_INTENT_HIGHLIGHT
        )}`};
    }

    &:active {
    }
  `;
}
