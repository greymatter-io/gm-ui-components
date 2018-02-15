import React from "react";
import styled from "styled-components";
import InputGroup from "../components/InputGroup";
import InputLabel from "../components/InputLabel";
import InputHint from "../components/InputHint";
import { InputStyle } from "../Input";

const InputElement = styled.input.attrs({
  type: "email",
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


export default function EmailInput({
  placeholder,
  value,
  name,
  label,
  hintText,
  required,
  stretch,
  readonly,
  maxlength,
  autofocus,
}) {
  return (
    <InputGroup stretch={stretch}>
      <InputLabel name={name} placeholder={placeholder}>{label}</InputLabel>
      <InputElement placeholder={label} readonly={readonly} name={name} required={required} autofocus={autofocus} value={value} />
      <InputHint hintText={hintText} />
    </InputGroup>
  );
};

