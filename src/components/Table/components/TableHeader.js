import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { columnItemShape } from "../types";
import TableCell from "./TableCell";
import { FONT_WEIGHT_BASE, FONT_WEIGHT_SEMIBOLD } from "style/styleVariables";

// Use all of TableCell's styles, but with a <th> element instead of <td>
const TableHeaderCell = styled(TableCell.withComponent("th"))`
  font-weight: ${FONT_WEIGHT_BASE};
  text-align: left;
  cursor: pointer;
  border-top: none;
  ${props =>
    props.isSorting &&
    css`
      font-weight: ${FONT_WEIGHT_SEMIBOLD};
    `};
`;

TableHeaderCell.displayName = "TableHeaderCell";

function TableHeader({ columns, sortDataIndex, onSort }) {
  return (
    <thead>
      <tr>
        {columns.map(({ title, key, dataIndex }) => (
          <TableHeaderCell
            key={key}
            onClick={() => onSort(dataIndex)}
            isSorting={sortDataIndex === dataIndex}
          >
            {typeof title === "function" ? title(dataIndex) : title}
          </TableHeaderCell>
        ))}
      </tr>
    </thead>
  );
}

TableHeader.propTypes = {
  columns: PropTypes.arrayOf(columnItemShape),
  onSort: PropTypes.func,
  sortDataIndex: PropTypes.string
};

export default TableHeader;
