import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { formInteractionStyles } from "./InputFieldInteractionStyles";
import { keen } from "style/theme";

const BORDER_WIDTH = 1;

const TextareaField = styled.textarea`
  ${formInteractionStyles};
  min-height: calc(${spacingScale(3)} - ${BORDER_WIDTH * 2}px);
  max-width: 100%;
  min-width: 8em;
  border-radius: calc(
    ${props => props.theme.CORNER_RADIUS_SHARP} + ${BORDER_WIDTH}px
  );
  border: ${BORDER_WIDTH}px solid ${props => props.theme.COLOR_KEYLINE_DEFAULT};
  padding: ${spacingScale(0.5)} ${spacingScale(1)};
  color: ${props => props.theme.COLOR_CONTENT_DEFAULT};
  font-family: ${props => props.theme.FONT_STACK_DEFAULT};
  font-size: ${props => props.theme.FONT_SIZE_TEXT_DEFAULT};
  background: ${props => props.theme.COLOR_BACKGROUND_TWO};
  box-sizing: border-box;
  line-height: 1.5;
  transition: all 0.15s ease;
  user-select: auto;
  flex: 1 1 auto;

  &::placeholder {
    color: ${props => props.theme.COLOR_CONTENT_DEFAULT};
    transition: inherit;
    opacity: ${props => props.theme.OPACITY_LIGHTER};
  }
`;

TextareaField.defaultProps = {
  theme: keen
};

export default TextareaField;
