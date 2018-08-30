import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";

const TableCell = styled.td`
  padding: ${spacingScale(2)} ${spacingScale(2)} ${spacingScale(2)} 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  :first-of-type {
    padding-left: ${spacingScale(1.5)};
  }
  &:not(:first-child) {
    text-align: right;
  }
`;

TableCell.displayName = "TableCell";

export default TableCell;
