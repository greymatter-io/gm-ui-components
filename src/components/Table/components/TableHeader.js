import React from "react";
import PropTypes from "prop-types";
import { css } from "styled-components";

import { columnItemShape } from "../types";
import TableCell from "./TableCell";

// Use all of TableCell's styles, but with a <th> element instead of <td>
const TableHeaderCell = TableCell.withComponent("th").extend`
  text-align:left; 
  font-weight: 400;
  cursor: pointer;
  border-top: none;
  ${props =>
    props.isSorting &&
    css`
      font-weight: 700;
    `}
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
            {title}
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
