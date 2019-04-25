import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { keen } from "style/styleVariables";

export const InputField = styled.input.attrs({
  autoFocus: props => props.autofocus,
  defaultValue: props => props.defaultValue,
  placeholder: props => props.placeholder,
  maxLength: props => props.maxlength,
  type: props => props.type
})`
  padding: ${spacingScale(0.5)} ${spacingScale(1)};
  height: ${spacingScale(4)};
  border: 1px solid ${props => props.theme.COLOR_KEYLINE};
  border-radius: ${props => props.theme.BORDER_RADIUS_BASE};
  color: ${props => props.theme.COLOR_CONTENT};
  font-family: ${props => props.theme.FONT_STACK_BASE};
  font-size: ${props => props.theme.FONT_SIZE_BASE};
  background: ${props => props.theme.COLOR_BACKGROUND_A};
  box-sizing: border-box;
  line-height: 1.5;
  transition: all 0.15s ease;
  user-select: auto;
  flex: 1 1 auto;

  &::placeholder {
    color: ${props => props.theme.COLOR_CONTENT};
    transition: inherit;
    opacity: 0.5;
  }

  &:focus {
    border-color: ${props => props.theme.COLOR_HIGHLIGHT};
    outline: none;
  }
`;

InputField.defaultProps = {
  theme: keen
};

export default InputField;
