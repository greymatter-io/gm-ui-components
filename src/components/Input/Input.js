import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import {
  FONT_SIZE_BASE,
  FONT_SIZE_XS,
  FONT_STACK_BASE,
  COLOR_KEYLINE,
  COLOR_CONTENT,
  BORDER_RADIUS_BASE,
  COLOR_HIGHLIGHT
} from 'style/styleVariables';
import { spacingScale } from 'style/styleFunctions';


Input.propTypes = {
  autofocus: PropTypes.bool,
  defaultValue: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
  ]),
};


const InputWrap = styled.label`
  font-family: ${FONT_STACK_BASE};
  position: relative;
`;

const InputLabel = styled.p`
  margin: ${spacingScale(0.5)} 0;
  font-size: ${FONT_SIZE_BASE};
`;

const InputHint = styled.small`
  margin: ${spacingScale(0.5)} 0;
  font-size: ${FONT_SIZE_XS};
  opacity: 0.5;
  display: block;
`;


const InputField = styled.input.attrs({
  autofocus: props => props.autofocus,
  defaultValue: props => props.defaultValue,
  placeholder: props => props.placeholder,
  maxLength: props => props.maxlength,
  type: props => props.type,
})`
  padding: ${spacingScale(0.5) + ' ' + spacingScale(1)};
  height: ${spacingScale(4)};
  border: 1px solid ${COLOR_KEYLINE};
  border-radius: ${BORDER_RADIUS_BASE};
  color: ${COLOR_CONTENT};
  font-family: ${FONT_STACK_BASE};
  font-size: ${FONT_SIZE_BASE};
  background: transparent;
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


export default function Input({ autofocus, defaultValue, hint, label, maxLength, placeholder, type, ...props }) {
  return (
    <InputWrap>
      { label && (<InputLabel>{ label }</InputLabel>)}
      <InputField type={type} autofocus={autofocus} defaultValue={defaultValue} placeholder={placeholder} maxLength={maxLength} />
      { hint && (<InputHint>{ hint }</InputHint>)}
    </InputWrap>
  )
}
