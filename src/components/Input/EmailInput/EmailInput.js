import React from "react";
import styled from "styled-components";
import InputGroup from "../components/InputGroup";
import InputLabel from "../components/InputLabel";
import InputHint from "../components/InputHint";
import { InputStyle } from "../Input";

const InputEmailElement = styled.input.attrs({
  type: "email",
  name: props => props.fieldName,
  placeholder: props => props.placeholder || ""
}) `
  ${InputStyle};
`;


export default function EmailInput({ placeholder, fieldName, label, hintText, required, stretch }) {
  return (
    <InputGroup stretch={stretch}>
      <InputLabel fieldName={fieldName} placeholder={placeholder}>{label}</InputLabel>
      <InputEmailElement placeholder={label} fieldName={fieldName} required={required} />
      <InputHint hintText={hintText} />
    </InputGroup>
  );
};

