import styled from "styled-components";

import { FONT_STACK_BASE, FONT_SIZE_SM } from "style/styleVariables";

const TableWrapper = styled.table`
  width: 100%;
  height: 100%;
  font-family: ${FONT_STACK_BASE};
  font-size: ${FONT_SIZE_SM};
  white-space: nowrap;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
`;

TableWrapper.displayName = "TableWrapper";

export default TableWrapper;
