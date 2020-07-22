import styled from "styled-components";

const TableCell = styled.td`
  padding: 2rem 2rem 2rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  :first-of-type {
    padding-left: 1.5rem;
  }
  &:not(:first-child) {
    text-align: right;
  }
`;

TableCell.displayName = "TableCell";

export default TableCell;
