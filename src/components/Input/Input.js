import styled from "styled-components";
import {
  COLOR_CONTENT,
  FONT_SIZE_BASE,
  COLOR_INTENT_HIGHLIGHT,
  FONT_SIZE_XS,
  FONT_STACK_BASE
} from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const Input = styled.input.attrs({
  type: "text",
  placeholder: props => props.placeholder,
  maxLength: props => props.maxlength
})`
  background: transparent;
  border: 0;
  box-shadow: 0 1px 0 ${COLOR_CONTENT};
  box-sizing: border-box;
  color: black;
  font-family: ${FONT_STACK_BASE};
  font-size: ${FONT_SIZE_BASE};
  line-height: 1.5;
  padding: ${spacingScale(1.25)} ${spacingScale(0.5)} ${spacingScale(0.75)};
  text-align: left;
  transition: all 0.15s ease;
  user-select: auto;
  width: 100%;

  &::placeholder {
    color: ${COLOR_CONTENT};
    position: relative;
    transition: inherit;
    opacity: 0.4;
    left: 0;
  }
  &:hover {
    box-shadow: 0 1px 0 ${COLOR_INTENT_HIGHLIGHT}, inset 0 -1px 0 ${COLOR_INTENT_HIGHLIGHT};
  }
  &:focus {
    box-shadow: 0 1px 0 ${COLOR_INTENT_HIGHLIGHT}, inset 0 -1px 0 ${COLOR_INTENT_HIGHLIGHT};
    outline: none;
  }
  &:focus::placeholder,
  &[value]::placeholder,
  &:not(:empty)::placeholder {
    transform: translateY(-${spacingScale(2)});
    left: 0;
    color: ${COLOR_CONTENT};
    opacity: 1;
    visibility: visible;
    font-size: ${FONT_SIZE_XS};
    letter-spacing: 0.03em;
  }
`;

export default Input;
