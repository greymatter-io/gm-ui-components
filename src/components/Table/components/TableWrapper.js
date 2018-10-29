import styled from "styled-components";

const TableWrapper = styled.table`
  width: 100%;
  height: 100%;
  font-family: ${props => props.theme.FONT_STACK_BASE};
  font-size: ${props => props.theme.FONT_SIZE_SM};
  white-space: nowrap;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
`;

TableWrapper.displayName = "TableWrapper";

export default TableWrapper;
