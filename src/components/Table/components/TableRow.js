import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { transparentize } from "polished";

import { COLOR_KEYLINE } from "style/styleVariables";
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
      background-color: ${transparentize(0.85, props.theme.brandColor)};
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
  onRowClick,
  rowIndex,
  selectedRowStyle
}) {
  return (
    <TableRowElement
      isSelected={isSelected}
      selectedRowStyle={selectedRowStyle}
      onKeyDown={event => {
        if (event.keyCode === 13) {
          const targetCell = event.target.getAttribute("data-column");
          onRowClick({ clicked: data, rowIndex, event, targetCell });
        }
      }}
      onContextMenu={event => {
        const targetCell = event.target.getAttribute("data-column");
        onRowClick({ clicked: data, rowIndex, event, targetCell });
      }}
      onClick={event => {
        const targetCell = event.target.getAttribute("data-column");
        onRowClick({ clicked: data, rowIndex, event, targetCell });
      }}
    >
      {/* Because the `columns` array determines the desired column order, 
        we need to map through it and use the dataIndex property to pick out 
        the appropriate data for that column */}
      {columns.map(({ dataIndex }) => {
        const cellContent = data[dataIndex];
        return (
          <TableCell key={`${dataIndex}|${data.key}`} data-column={dataIndex}>
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
  columns: PropTypes.arrayOf(columnItemShape),
  data: dataItemShape,
  isRowSelected: PropTypes.bool,
  isSelected: PropTypes.bool,
  onRowClick: PropTypes.func,
  rowIndex: PropTypes.number,
  selectedRowStyle: PropTypes.object
};

export default TableRow;
