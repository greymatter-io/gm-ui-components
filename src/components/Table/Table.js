import React from "react";
import PropTypes from "prop-types";

import TableWrapper from "./components/TableWrapper";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";
import TableColumn from "./components/TableColumn";

import { columnItemShape, dataItemShape } from "./types";

export default function Table({
  columns = [],
  data = [],
  onCellClick,
  onSort,
  selectedRows = [],
  sortDataIndex,
  accentColor,
  ...props
}) {
  return (
    <TableWrapper {...props}>
      {/* colgroup is used to give columns the proper width */}
      <colgroup>
        {columns.map(({ width }, i) => (
          <TableColumn colWidth={width} key={`${width}|${i}`} />
        ))}
      </colgroup>
      <TableHeader
        columns={columns}
        onSort={onSort}
        sortDataIndex={sortDataIndex}
      />
      <tbody>
        {data.map((item, rowIndex) => (
          <TableRow
            accentColor={accentColor}
            data={item}
            key={item.key}
            columns={columns}
            onCellClick={onCellClick}
            rowIndex={rowIndex}
            isSelected={selectedRows.some(
              selectedRow => selectedRow === rowIndex
            )}
          />
        ))}
      </tbody>
    </TableWrapper>
  );
}

Table.propTypes = {
  accentColor: PropTypes.string,
  columns: PropTypes.arrayOf(columnItemShape), // An array of objects used to label and size columns
  data: PropTypes.arrayOf(dataItemShape), // An array of objects to populate the rows
  onCellClick: PropTypes.func, // A function called when a user clicks a cell. Passes the row data, row index, and column dataIndex.
  onSort: PropTypes.func, // A function called when a user sorts a column. Passes the dataIndex of the column being sorted.
  selectedRows: PropTypes.arrayOf(PropTypes.number), // An array of indices of the currently selected rows
  sortDataIndex: PropTypes.string // The dataIndex of the column that is currently being sorted
};