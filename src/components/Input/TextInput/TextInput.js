import React from "react";
import styled from "styled-components";
import InputGroup from "../components/InputGroup";
import InputLabel from "../components/InputLabel";
import InputHint from "../components/InputHint";
import { InputStyle } from "../Input";

const InputTextElement = styled.input.attrs({
  type: "text",
  name: props => props.fieldName,
  placeholder: props => props.placeholder || ""
}) `
  ${InputStyle};
`;


export default function TextInput({ label, placeholder, fieldName, hintText, required, stretch }) {
  return (
    <InputGroup stretch={stretch}>
      <InputLabel fieldName={fieldName} placeholder={placeholder}>{label}</InputLabel>
      <InputTextElement placeholder={placeholder || label} fieldName={fieldName} />
      <InputHint hintText={hintText} />
    </InputGroup>
  );
};

