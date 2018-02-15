import React from "react";
import styled from "styled-components";
import { COLOR_BLACK, FONT_SIZE_BASE, COLOR_HIGHLIGHT, FONT_SIZE_XS, FONT_GROUP_MAIN_TEXT } from "../../style/styleVariables";
import { spacingScale } from "../../style/styleFunctions";
import InputGroup from "./components/InputGroup";
import InputLabel from "./components/InputLabel";
import InputHint from "./components/InputHint";

export const InputStyle = (`
  font-family: ${FONT_GROUP_MAIN_TEXT};
  font-size: ${FONT_SIZE_BASE};
  padding: ${spacingScale(1.25)} ${spacingScale(1.25)} ${spacingScale(.75)};
  user-select: auto;
  box-sizing: border-box;
  text-align: left;
  color: black;
  line-height: 1.1;
  box-sizing: border-box;
  box-shadow: 0 1px 0 ${COLOR_BLACK};
  transition: all .15s ease;
  border: 0;
  width: 100%;

  &::placeholder {
    color: ${COLOR_BLACK};
    position: relative;
    transition: inherit;
    opacity: .4;
    left: 0;
  }

  &:hover {
    box-shadow: 0 1px 0 ${COLOR_HIGHLIGHT}, inset 0 -1px 0 ${COLOR_HIGHLIGHT};
  }

  &:focus {
    box-shadow: 0 1px 0 ${COLOR_HIGHLIGHT}, inset 0 -1px 0 ${COLOR_HIGHLIGHT};
    outline: none;
  }

  &:focus::placeholder,
  &[value]::placeholder,
  &:not(:empty)::placeholder {
    transform: translateY(-${spacingScale(1.5)});
    left: 0;
    color: ${COLOR_BLACK};
    opacity: 1;
    visibility: visible;
    font-size: ${FONT_SIZE_XS};
    letter-spacing: .03em;
  }

  &:valid {
  }

  &:invalid {
  }

  &[required] {
  }

  &[disabled] {
  }

  &[readonly] {
  }


`);


const InputElement = styled.input.attrs({
  type: "text",
  name: props => props.name,
  autofocus: props => props.autofocus,
  maxLength: props => props.maxlength,
  readonly: props => props.readonly,
  required: props => props.required,
  value: props => props.value,
  placeholder: props => props.placeholder || ""
}) `
  ${InputStyle};
`;


export default function Input({
  placeholder,
  value,
  name,
  label,
  hint,
  required,
  stretch,
  readonly,
  maxlength,
  autofocus
}) {
  return (
    <InputGroup stretch={stretch}>
      <InputLabel name={name} placeholder={placeholder}>{label}</InputLabel>
      <InputElement placeholder={placeholder || label} readonly={readonly} name={name} required={required} autofocus={autofocus} value={value} />
      <InputHint hint={hint} />
    </InputGroup>
  );
};
