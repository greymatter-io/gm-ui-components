import React from "react";
import { shallow } from "enzyme";

import TableRow from "../TableRow";

let jestSpy = jest.fn();
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "50%"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: "20%"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: "10%"
  },
  {
    title: "Food",
    dataIndex: "favfood",
    key: "favfood",
    width: "10%"
  }
];

const data = {
  key: "2",
  name: "Jane Green",
  age: jestSpy,
  address: "London No. 1 Lake Park",
  favfood: "Amatriciana"
};

describe("TableRow", () => {
  let TableRowWrapper;
  let mockEvent = {
    target: {
      value: "test",
      getAttribute: () => {
        return "data-column-cell-1";
      }
    }
  };

  // expected event result for onclick, onContextMenu, onKeyDown
  const explectedEventResult = {
    clicked: data,
    rowIndex: 1,
    event: mockEvent,
    targetCell: "data-column-cell-1"
  };

  beforeEach(() => {
    TableRowWrapper = shallow(
      <TableRow
        columns={columns}
        data={data}
        onRowClick={jestSpy}
        rowIndex={1}
      />
    );
  });

  test("matches snapshot", () => {
    expect(TableRowWrapper).toMatchSnapshot();
  });

  test("renders a Table Row", () => {
    expect(TableRowWrapper.find("TableRowElement")).toHaveLength(1);
  });

  test("renders the correct amount of cells", () => {
    expect(TableRowWrapper.find("TableCell")).toHaveLength(4);
  });

  test("renders cells in the correct columns", () => {
    TableRowWrapper.find("TableCell").forEach((cell, i) => {
      expect(cell.props()["data-column"]).toBe(columns[i].dataIndex);
    });
  });

  test("invokes a render prop if provided in cell data object", () => {
    expect(jestSpy).toHaveBeenCalled();
  });

  test("on click, should return correct row data", () => {
    TableRowWrapper.simulate("click", mockEvent);

    const lastCall = jestSpy.mock.calls.length - 1;

    expect(jestSpy.mock.calls[lastCall][0]).toEqual(explectedEventResult);
  });

  test("on contextMenu, should return correct row data", () => {
    TableRowWrapper.simulate("contextmenu", mockEvent);

    const lastCall = jestSpy.mock.calls.length - 1;

    expect(jestSpy.mock.calls[lastCall][0]).toEqual(explectedEventResult);
  });

  test("on keydown enter, should return correct row data", () => {
    mockEvent.keyCode = 13;

    TableRowWrapper.simulate("keyDown", mockEvent);

    const lastCall = jestSpy.mock.calls.length - 1;

    expect(jestSpy.mock.calls[lastCall][0]).toEqual(explectedEventResult);
  });
});
