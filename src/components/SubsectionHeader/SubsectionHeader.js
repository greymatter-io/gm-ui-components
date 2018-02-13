import React from "react";
import styled from "styled-components";
import { FONT_SIZE_BASE, FONT_WEIGHT_HEADING, BORDER_RADIUS_BASE, PADDING_BASE } from "../../style/styleVariables";


const SubsectionHeaderWrap = styled.header`
  display: flex;
  margin: 0;
  margin-top: ${parseInt(PADDING_BASE, 10) * 2}px;
`;

const SubsectionHeaderTitle = styled.h1`
  font-weight: ${FONT_WEIGHT_HEADING};
  font-size: ${FONT_SIZE_BASE};
  background: rgba(0,0,0,.1);
  border-radius: ${BORDER_RADIUS_BASE};
  padding: .15em .5em;
  flex: 0 0 auto;
`;


export default function SubsectionHeader({ label }) {
  return (
    <SubsectionHeaderWrap>
      <SubsectionHeaderTitle>{label || "Section"}</SubsectionHeaderTitle>
    </SubsectionHeaderWrap>
  );
};