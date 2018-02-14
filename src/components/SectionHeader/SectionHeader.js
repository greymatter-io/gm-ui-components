import React from "react";
import styled from "styled-components";
import {
  FONT_SIZE_LG, PADDING_BASE, FONT_WEIGHT_HEADING, LINE_HEIGHT_HEADING
} from "../../style/styleVariables";


const SectionHeaderWrap = styled.header`
  display: flex;
  margin: 0;
  margin-top: ${parseInt(PADDING_BASE, 10) * 8}px;
`;

const SectionHeaderTitle = styled.h2`
  font-weight: ${FONT_WEIGHT_HEADING};
  line-height: ${LINE_HEIGHT_HEADING};
  font-size: ${FONT_SIZE_LG};
  margin: 0;
  flex: 0 0 100%;
`;


export default function SectionHeader({ label }) {
  return (
    <SectionHeaderWrap>
      <SectionHeaderTitle>{label || "Section"}</SectionHeaderTitle>
    </SectionHeaderWrap>
  );
};