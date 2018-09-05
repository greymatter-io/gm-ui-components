import styled from 'styled-components';

import { FONT_SIZE_BASE, FONT_STACK_BASE, COLOR_KEYLINE, COLOR_CONTENT, COLOR_BACKGROUND_A, BORDER_RADIUS_BASE, COLOR_HIGHLIGHT } from 'style/styleVariables';
import { spacingScale } from 'style/styleFunctions';

export const InputField = styled.input.attrs({
  autoFocus: props => props.autoFocus,
  defaultValue: props => props.defaultValue,
  placeholder: props => props.placeholder,
  maxLength: props => props.maxlength,
  type: props => props.type,
})`
  padding: ${spacingScale(0.5)} ${spacingScale(1)};
  height: ${spacingScale(4)};
  border: 1px solid ${COLOR_KEYLINE};
  border-radius: ${BORDER_RADIUS_BASE};
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
    opacity: 0.5;
  }

  &:focus {
    border-color: ${COLOR_HIGHLIGHT};
    outline: none;
  }
`;

export default InputField;