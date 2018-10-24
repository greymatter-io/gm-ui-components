import styled, { css } from "styled-components";
import { transparentize } from "polished";

import {
  COLOR_INTENT_HIGHLIGHT,
  OPACITY_50,
  COLOR_BACKGROUND_A,
  COLOR_BACKGROUND_C
} from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";
import {
  FORM_HIGHLIGHT_SIZE,
  formInteractionStyles
} from "./InputFieldInteractionStyles";

const BORDER_WIDTH = 1;

const ACTIVE_SHADOW = ({ theme }) =>
  css`inset 0 0 0 1px ${theme.brandColor || COLOR_INTENT_HIGHLIGHT}`;

const FOCUS_SHADOW = ({ theme }) =>
  css`0 0 0 ${FORM_HIGHLIGHT_SIZE}px ${transparentize(
    1 - OPACITY_50,
    theme.brandColor || COLOR_INTENT_HIGHLIGHT
  )}`;

const InputBox = styled.input`
  ${formInteractionStyles};
  border: ${({ theme }) =>
    css`${BORDER_WIDTH}px solid ${theme.brandColor || COLOR_INTENT_HIGHLIGHT}`};
  color: ${({ theme }) => theme.brandColor || COLOR_INTENT_HIGHLIGHT};
  font-size: ${spacingScale(2)};
  margin: ${spacingScale(0.25)};
  appearance: none;
  flex: 0 0 calc(1em - ${BORDER_WIDTH * 2}px);
  height: calc(1em - ${BORDER_WIDTH * 2}px);
  width: calc(1em - ${BORDER_WIDTH * 2}px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;

  &:focus {
    box-shadow: ${FOCUS_SHADOW}, 0;
  }

  &:active {
    box-shadow: ${ACTIVE_SHADOW}, 0;

    &:focus {
      box-shadow: ${FOCUS_SHADOW}, ${ACTIVE_SHADOW};
    }
  }

  &:after {
    content: "";
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${COLOR_BACKGROUND_A};
  }

  &:checked {
    background: ${({ theme }) => theme.brandColor || COLOR_INTENT_HIGHLIGHT};

    &:after {
      opacity: 1;
    }
  }

  &:disabled {
    border-color: ${COLOR_BACKGROUND_C};
    opacity: ${OPACITY_50};
    box-shadow: none;

    &:checked {
      background-color: ${COLOR_BACKGROUND_C};
    }
  }
`;

export default InputBox;
