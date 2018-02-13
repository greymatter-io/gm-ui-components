import React from "react";
import styled from "styled-components";
import { FONT_SIZE_LG, PADDING_BASE, FONT_WEIGHT_HEADING } from "../../style/styleVariables";


const SectionHeaderWrap = styled.header`
  border-bottom: 1px solid;
  display: flex;
  margin-top: ${parseInt(PADDING_BASE, 10) * 4}px;
`;

const SectionHeaderTitle = styled.h1`
  font-weight: ${FONT_WEIGHT_HEADING};
  font-size: ${FONT_SIZE_LG};
  flex: 0 0 100%;
`;


export default function SectionHeader({ label }) {
  return (
    <SectionHeaderWrap>
      <SectionHeaderTitle>{label || "Section"}</SectionHeaderTitle>
    </SectionHeaderWrap>
  );
};