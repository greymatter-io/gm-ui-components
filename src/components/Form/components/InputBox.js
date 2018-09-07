import styled from "styled-components";
import { transparentize } from "polished";

import {
  COLOR_INTENT_HIGHLIGHT,
  OPACITY_50,
  COLOR_BACKGROUND_A,
  COLOR_BACKGROUND_C
} from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";
import { formInteractionStyles } from "./InputFieldStyles";

const InputBox = styled.input`
  ${formInteractionStyles};
  border: 1px solid ${COLOR_INTENT_HIGHLIGHT};
  color: ${COLOR_INTENT_HIGHLIGHT};
  font-size: ${spacingScale(2)};
  margin: ${spacingScale(0.25)};
  appearance: none;
  flex: 0 0 1em;
  height: calc(1em - 2px);
  width: calc(1em - 2px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;

  float: left;

  &:focus {
    box-shadow: 0 0 0 2px
        ${transparentize(1 - OPACITY_50, COLOR_INTENT_HIGHLIGHT)},
      inset 0 0 0 1px ${COLOR_INTENT_HIGHLIGHT};
  }

  &:active {
    box-shadow: inset 0 0 0 1px ${COLOR_INTENT_HIGHLIGHT};

    &:focus {
      box-shadow: 0 0 0 2px
          ${transparentize(1 - OPACITY_50, COLOR_INTENT_HIGHLIGHT)},
        inset 0 0 0 1px ${COLOR_INTENT_HIGHLIGHT};
    }
  }

  &:after {
    content: "";
    opacity: 0;
    background-color: ${COLOR_BACKGROUND_A};
  }

  &:checked {
    background: ${COLOR_INTENT_HIGHLIGHT};

    &:after {
      opacity: 1;
    }
  }

  &:disabled {
    &:checked {
      background-color: ${COLOR_BACKGROUND_C};
    }
    border-color: ${COLOR_BACKGROUND_C};
    opacity: ${OPACITY_50};
    box-shadow: none;
  }
`;

export default InputBox;
