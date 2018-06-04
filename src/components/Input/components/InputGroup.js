import React from "react";
import styled from "styled-components";
import { spacingScale } from "../../../style/styleFunctions";

const InputGroupElement = styled.div`
  position: relative;
  margin-top: ${spacingScale(1)};
  width: 12em;
  overflow: visible;

  // Properly place Icon within input area
  & > svg:first-child {
    position: absolute;
    left: 0;
    opacity: .25;
    top: ${spacingScale(.25)};

    // Shift text content over to the right when there's an icon
    & ~ input {
      padding-left: ${spacingScale(3)};
    }
  }

  ${props => props.stretch === true && (`
    width: 100%;
    flex-grow: 1;
  `)}
`;

export default function InputGroup({ children, stretch }) {
  return (
    <InputGroupElement stretch={stretch}>
      {children}
    </InputGroupElement>
  )
};