import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { transparentize } from "polished";

import { COLOR_BRAND_A, COLOR_KEYLINE } from "style/styleVariables";
import { columnItemShape, dataItemShape } from "../types";

import TableCell from "./TableCell";

const TableRowElement = styled.tr.attrs({
  tabIndex: 0
})`
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
  onRowClick,
  rowIndex,
  accentColor = COLOR_BRAND_A,
  selectedRowStyle
}) {
  return (
    <TableRowElement
      isSelected={isSelected}
      accentColor={accentColor}
      selectedRowStyle={selectedRowStyle}
      onKeyDown={e => {
        if (e.keyCode === 13 || e.keyCode === 32) {
          onRowClick({ clicked: data, rowIndex });
        }
      }}
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
            {typeof cellContent === "function"
              ? cellContent(dataIndex, data, rowIndex)
              : cellContent}
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
  onRowClick: PropTypes.func,
  rowIndex: PropTypes.number,
  selectedRowStyle: PropTypes.object
};

export default TableRow;
