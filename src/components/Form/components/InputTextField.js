import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { formInteractionStyles } from "./InputFieldInteractionStyles";
import { keen } from "style/theme";

const BORDER_WIDTH = 1;

export const InputTextField = styled.input`
  ${formInteractionStyles};
  min-height: calc(${spacingScale(3)} - ${BORDER_WIDTH * 2}px);
  border-radius: calc(${props => props.theme.RADIUS_05} + ${BORDER_WIDTH}px);
  border: ${BORDER_WIDTH}px solid ${props => props.theme.COLOR_KEYLINE};
  padding: ${spacingScale(0.5)} ${spacingScale(1)};
  appearance: none;
  margin: 0;
  color: ${props => props.theme.COLOR_CONTENT};
  font-family: ${props => props.theme.FONT_STACK_BASE};
  font-size: ${props => props.theme.FONT_SIZE_BASE};
  background: ${props => props.theme.COLOR_BACKGROUND_B};
  box-sizing: border-box;
  line-height: 1.5;
  transition: all 0.15s ease;
  user-select: auto;
  flex: 1 1 auto;

  &::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  &:hover {
  }

  &::placeholder {
    color: ${props => props.theme.COLOR_CONTENT};
    transition: inherit;
    opacity: ${props => props.theme.OPACITY_50};
  }
`;

InputTextField.defaultProps = {
  theme: keen
};

export default InputTextField;
