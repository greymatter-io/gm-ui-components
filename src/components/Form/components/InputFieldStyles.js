import { COLOR_INTENT_HIGHLIGHT, OPACITY_50 } from "style/styleVariables";
import { transparentize } from "polished";

export function formInteractionStyles() {
  return `

    &:hover {
    }

    &:focus,
    &:focus:active {
      outline: none;
      border: 1px solid ${COLOR_INTENT_HIGHLIGHT};
      box-shadow: 0 0 0 2px
        ${transparentize(1 - OPACITY_50, COLOR_INTENT_HIGHLIGHT)};
    }

    &:active {
      /* border: 1px solid black; */
    }

    &:valid {
      /* border: 2px solid green; */
    }

    &:invalid {
      /* border: 2px solid red; */
    }

    &:disabled {
    }

    &:read-only {
      border-style: dotted;
    }

    &:required {
      /* border-bottom: 1px solid red; */
    }

    &:empty {
      /* border-left: 1px solid grey; */
    }

    &:default {
      /* border-right: 1px solid blue; */
    }
  `;
}
