import styled from "styled-components";

import {
  FONT_SIZE_BASE,
  COLOR_KEYLINE,
  COLOR_CONTENT,
  COLOR_BACKGROUND_A,
  OPACITY_50,
  OPACITY_15,
  COLOR_INTENT_HIGHLIGHT
} from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";
import { mix, transparentize } from "polished";
import {
  formInteractionStyles,
  FORM_HIGHLIGHT_SIZE
} from "../../../components/InputFieldStyles";

const BORDER_WIDTH = 2;
const THUMB_SIZE = "1em";
const TRACK_HEIGHT = spacingScale(0.25);
const ACTIVE_SHADOW = `inset 0 0 0 1px ${COLOR_INTENT_HIGHLIGHT}`;
const FOCUS_SHADOW = `0 0 0 ${FORM_HIGHLIGHT_SIZE}px ${transparentize(
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
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  /* Styles with these non-standard selectors need to be
  separated or the browser will ignore them. A cleaner format
  for these declarations would be great.
  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––*/

  /* Style the slider shuttle */
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
    z-index: 1; /* Fix for clipping issue noticed in Safari 12 */
  }

  ::-moz-range-thumb {
    background-color: ${mix(OPACITY_50, COLOR_BACKGROUND_A, COLOR_CONTENT)};
    box-shadow: 0 0 0 ${BORDER_WIDTH}px ${COLOR_BACKGROUND_A},
      ${PLACEHOLDER_SHADOW};
    border: 0;
    flex: 0 0 ${THUMB_SIZE};
    width: ${THUMB_SIZE};
    height: ${THUMB_SIZE};
    appearance: none;
    cursor: pointer;
    border-radius: 100px;
    transition: all 0.15s ease;
  }

  /* Style the slider track */
  ::-webkit-slider-runnable-track {
    height: ${TRACK_HEIGHT};
    background-color: ${COLOR_KEYLINE};
    border-radius: 100px;
    transition: all 0.15s ease;
    display: flex;
    align-items: center;
  }
  ::-moz-range-track {
    height: ${TRACK_HEIGHT};
    background-color: ${COLOR_KEYLINE};
    border-radius: 100px;
    transition: all 0.15s ease;
    display: flex;
    align-items: center;
  }

  /* Style the slider shuttle when the form field is hovered */
  &:hover::-webkit-slider-thumb {
    background-color: ${COLOR_INTENT_HIGHLIGHT};

    &:hover {
      /* Style the slider shuttle when the form field is hovered and the shuttle is hovered */
      background-color: ${mix(
        OPACITY_15,
        COLOR_BACKGROUND_A,
        COLOR_INTENT_HIGHLIGHT
      )};
    }
  }

  &:hover::-webkit-slider-thumb {
    background-color: ${COLOR_INTENT_HIGHLIGHT};

    &:hover {
      background-color: ${mix(
        OPACITY_15,
        COLOR_BACKGROUND_A,
        COLOR_INTENT_HIGHLIGHT
      )};
    }
  }

  /* Style the slider shuttle when the form field is focused */
  &:focus::-webkit-slider-thumb {
    box-shadow: ${FOCUS_SHADOW}, ${PLACEHOLDER_SHADOW};
    background-color: ${COLOR_INTENT_HIGHLIGHT};
  }

  &:focus::-moz-range-thumb {
    box-shadow: ${FOCUS_SHADOW}, ${PLACEHOLDER_SHADOW};
    background-color: ${COLOR_INTENT_HIGHLIGHT};
  }

  /* Style the slider shuttle when the form field is active */
  &:active::-webkit-slider-thumb {
    box-shadow: ${ACTIVE_SHADOW}, ${PLACEHOLDER_SHADOW};
    background-color: ${COLOR_INTENT_HIGHLIGHT};

    /* Style the slider shuttle when the form field is active and focused */
    &:focus::-webkit-slider-thumb {
      box-shadow: ${FOCUS_SHADOW}, ${ACTIVE_SHADOW};
    }
  }

  &:active::-moz-range-thumb {
    box-shadow: ${ACTIVE_SHADOW}, ${PLACEHOLDER_SHADOW};
    background-color: ${COLOR_INTENT_HIGHLIGHT};

    &:focus::-moz-range-thumb {
      box-shadow: ${FOCUS_SHADOW}, ${ACTIVE_SHADOW};
    }
  }
`;

export default InputRangeControl;
