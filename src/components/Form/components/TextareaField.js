import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { formInteractionStyles } from "./InputFieldInteractionStyles";
import { keen } from "style/styleVariables";

const BORDER_WIDTH = 1;

const TextareaField = styled.textarea`
  ${formInteractionStyles};
  min-height: calc(${spacingScale(3)} - ${BORDER_WIDTH * 2}px);
  max-width: 100%;
  min-width: 8em;
  border-radius: calc(${props => props.theme.RADIUS_05} + ${BORDER_WIDTH}px);
  border: ${BORDER_WIDTH}px solid ${props => props.theme.COLOR_KEYLINE};
  padding: ${spacingScale(0.5)} ${spacingScale(1)};
  color: ${props => props.theme.COLOR_CONTENT};
  font-family: ${props => props.theme.FONT_STACK_BASE};
  font-size: ${props => props.theme.FONT_SIZE_BASE};
  background: ${props => props.theme.COLOR_BACKGROUND_B};
  box-sizing: border-box;
  line-height: 1.5;
  transition: all 0.15s ease;
  user-select: auto;
  flex: 1 1 auto;

  &::placeholder {
    color: ${props => props.theme.COLOR_CONTENT};
    transition: inherit;
    opacity: ${props => props.theme.OPACITY_50};
  }
`;

TextareaField.defaultProps = {
  theme: keen
};

export default TextareaField;
