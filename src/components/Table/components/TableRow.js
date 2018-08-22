import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { transparentize } from "polished";

import { COLOR_BRAND_A, COLOR_KEYLINE } from "style/styleVariables";
import { columnItemShape, dataItemShape } from "../types";

import TableCell from "./TableCell";

const TableRowElement = styled.tr`
  cursor: pointer;
  position: relative;
  box-shadow: 0 -1px 0 ${COLOR_KEYLINE};

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
      ${props.selectedRowStyle};
    `};
`;

TableRowElement.displayName = "TableRowElement";

function TableRow({
  data,
  columns,
  isSelected,
  onCellClick,
  rowIndex,
  accentColor = COLOR_BRAND_A
  selectedRowStyle,
}) {
  return (
    <TableRowElement
      isSelected={isSelected}
      accentColor={accentColor}
      selectedRowStyle={selectedRowStyle}
    >
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
  rowIndex: PropTypes.number,
  selectedRowStyle: PropTypes.object
};

export default TableRow;
