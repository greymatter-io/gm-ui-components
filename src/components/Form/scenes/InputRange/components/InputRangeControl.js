import styled from "styled-components";

import {
  FONT_SIZE_BASE,
  COLOR_KEYLINE,
  COLOR_CONTENT,
  COLOR_BACKGROUND_A,
  OPACITY_50,
  COLOR_INTENT_HIGHLIGHT
} from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";
import { mix, transparentize } from "polished";
import { formInteractionStyles } from "../../../components/InputFieldStyles";

const BORDER_WIDTH = 2;
const THUMB_SIZE = "1em";
const TRACK_HEIGHT = spacingScale(0.25);
const ACTIVE_SHADOW = `inset 0 0 0 1px ${COLOR_INTENT_HIGHLIGHT}`;
const FOCUS_SHADOW = `0 0 0 2px ${transparentize(
  1 - OPACITY_50,
  COLOR_INTENT_HIGHLIGHT
)}`;
const PLACEHOLDER_SHADOW = "0 0 0 transparent";

const InputRangeControl = styled.input.attrs({
  type: "range",
  autoFocus: props => props.autoFocus,
  disabled: props => props.disabled,
  defaultValue: props => props.defaultValue,
  maxLength: props => props.maxlength
})`
  ${formInteractionStyles};
  font-size: ${FONT_SIZE_BASE};
  padding: calc(${THUMB_SIZE} / 2) 0;
  user-select: auto;
  flex: 1 1 auto;
  display: flex;
  appearance: none;
  align-items: center;
  height: 2px;
  border: 0;
  position: relative;
  transition: all 0.15s ease;

  &:focus,
  &:focus:active {
    box-shadow: none;
    border: none;
  }

  ::-webkit-slider-thumb {
    background-color: ${mix(OPACITY_50, COLOR_BACKGROUND_A, COLOR_CONTENT)};
    box-shadow: 0 0 0 ${BORDER_WIDTH}px ${COLOR_BACKGROUND_A},
      ${PLACEHOLDER_SHADOW};
    flex: 0 0 ${THUMB_SIZE};
    width: ${THUMB_SIZE};
    height: ${THUMB_SIZE};
    appearance: none;
    cursor: pointer;
    border-radius: 100px;
    transition: all 0.15s ease;
  }

  ::-webkit-slider-runnable-track {
    height: ${TRACK_HEIGHT};
    background-color: ${COLOR_KEYLINE};
    border-radius: 100px;
    transition: all 0.15s ease;
    display: flex;
    align-items: center;
  }

  &:hover::-webkit-slider-thumb {
    background-color: ${COLOR_INTENT_HIGHLIGHT};
  }

  &:focus::-webkit-slider-thumb {
    box-shadow: ${FOCUS_SHADOW}, ${PLACEHOLDER_SHADOW};
    background-color: ${COLOR_INTENT_HIGHLIGHT};
  }

  &:active::-webkit-slider-thumb {
    box-shadow: ${ACTIVE_SHADOW}, ${PLACEHOLDER_SHADOW};
    background-color: ${COLOR_INTENT_HIGHLIGHT};

    &:focus::-webkit-slider-thumb {
      box-shadow: ${FOCUS_SHADOW}, ${ACTIVE_SHADOW};
    }
  }
`;

export default InputRangeControl;
