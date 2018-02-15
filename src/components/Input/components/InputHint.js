import React from "react";
import styled from "styled-components";
import { FONT_SIZE_SM, LINE_HEIGHT_BASE } from "../../../style/styleVariables";
import { spacingScale } from "../../../style/styleFunctions";

const InputHintElement = styled.small.attrs({
}) `
  display: block;
  font-size: ${FONT_SIZE_SM};
  opacity: .5;
  padding: ${spacingScale(.5)} .1em;
  line-height: ${LINE_HEIGHT_BASE};
  max-width: 100%;
`;

export default function InputHint({ hintText, children }) {
  return (
    <InputHintElement>
      {hintText}
      {children}
    </InputHintElement>
  )
};