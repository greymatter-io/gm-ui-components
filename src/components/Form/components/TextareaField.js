import styled from "styled-components";

import {
  FONT_SIZE_BASE,
  FONT_STACK_BASE,
  COLOR_KEYLINE,
  COLOR_CONTENT,
  COLOR_BACKGROUND_A,
  RADIUS_05,
  OPACITY_50
} from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";
import { formInteractionStyles } from "./InputFieldInteractionStyles";

const BORDER_WIDTH = 1;

const TextareaField = styled.textarea`
  ${formInteractionStyles};
  min-height: calc(${spacingScale(3)} - ${BORDER_WIDTH * 2}px);
  max-width: 100%;
  min-width: 8em;
  border-radius: calc(${RADIUS_05} + ${BORDER_WIDTH}px);
  border: ${BORDER_WIDTH}px solid ${COLOR_KEYLINE};
  padding: ${spacingScale(0.5)} ${spacingScale(1)};
  color: ${COLOR_CONTENT};
  font-family: ${FONT_STACK_BASE};
  font-size: ${FONT_SIZE_BASE};
  background: ${COLOR_BACKGROUND_A};
  box-sizing: border-box;
  line-height: 1.5;
  transition: all 0.15s ease;
  user-select: auto;
  flex: 1 1 auto;

  &::placeholder {
    color: ${COLOR_CONTENT};
    transition: inherit;
    opacity: ${OPACITY_50};
  }
`;

export default TextareaField;
