import React from "react";
import styled from "styled-components";
import InputGroup from "../components/InputGroup";
import InputLabel from "../components/InputLabel";
import InputHint from "../components/InputHint";
import { InputStyle } from "../Input";

const InputPasswordElement = styled.input.attrs({
  type: "password",
  name: props => props.fieldName,
  placeholder: props => props.placeholder || ""
}) `
  ${InputStyle};
`;


export default function PasswordInput({ placeholder, fieldName, label, hintText, required, stretch }) {
  return (
    <InputGroup stretch={stretch}>
      <InputLabel fieldName={fieldName} placeholder={placeholder}>{label}</InputLabel>
      <InputPasswordElement placeholder={label} fieldName={fieldName} required={required} />
      <InputHint hintText={hintText} />
    </InputGroup>
  );
};

