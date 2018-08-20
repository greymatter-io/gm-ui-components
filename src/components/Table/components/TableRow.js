import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { lighten, transparentize } from "polished";

import { COLOR_GREY, COLOR_BRAND_PRIMARY } from "style/styleVariables";
import { columnItemShape, dataItemShape } from "../types";

import TableCell from "./TableCell";

const TableRowElement = styled.tr`
  cursor: pointer;
  position: relative;
  box-shadow: 0 -1px 0 ${lighten(0.75, COLOR_GREY)};

  /* Give the table row a border when selected */
  ${props =>
    props.isSelected &&
    css`
      background-color: ${transparentize(0.85, props.accentColor)};
      &,
      & + &,
      & + tr {
        box-shadow: none;
      }
    `};
`;

TableRowElement.displayName = "TableRowElement";

function TableRow({
  data,
  columns,
  isSelected,
  onCellClick,
  rowIndex,
  accentColor = COLOR_BRAND_PRIMARY
}) {
  return (
    <TableRowElement isSelected={isSelected} accentColor={accentColor}>
      {/* Because the `columns` array determines the desired column order, 
        we need to map through it and use the dataIndex property to pick out 
        the appropriate data for that column */}
      {columns.map(({ dataIndex }) => {
        const cellContent = data[dataIndex];
        return (
          <TableCell
            onClick={() => onCellClick({ clicked: dataIndex, data, rowIndex })}
            key={`${dataIndex}|${data.key}`}
            data-column={dataIndex}
          >
            {/* Cell content can be either text or a render prop */}
            {typeof cellContent === "function" ? cellContent() : cellContent}
          </TableCell>
        );
      })}
    </TableRowElement>
  );
}

TableRow.propTypes = {
  accentColor: PropTypes.string,
  columns: PropTypes.arrayOf(columnItemShape),
  data: dataItemShape,
  isRowSelected: PropTypes.bool,
  isSelected: PropTypes.bool,
  onCellClick: PropTypes.func,
  rowIndex: PropTypes.number
};

export default TableRow;
