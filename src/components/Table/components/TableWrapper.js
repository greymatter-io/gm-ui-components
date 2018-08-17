import styled from "styled-components";

import { FONT_STACK_BASE } from "style/styleVariables";

const TableWrapper = styled.table`
  width: 100%;
  height: 100%;
  font-family: ${FONT_STACK_BASE};
  white-space: nowrap;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
`;

TableWrapper.displayName = "TableWrapper";

export default TableWrapper;
