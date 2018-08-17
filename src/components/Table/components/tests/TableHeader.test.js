import React from "react";
import { shallow } from "enzyme";

import TableHeader from "../TableHeader";

let jestSpy = jest.fn();

describe("TableHeader", () => {
  let TableHeaderWrapper;

  beforeEach(() => {
    TableHeaderWrapper = shallow(
      <TableHeader columns={columns} onSort={jestSpy} />
    );
  });

  test("matches snapshot", () => {
    expect(TableHeaderWrapper).toMatchSnapshot();
  });

  test("renders the correct Table elements", () => {
    expect(TableHeaderWrapper.find("thead")).toHaveLength(1);
    expect(TableHeaderWrapper.find("tr")).toHaveLength(1);
  });

  test("renders the correct number of header cells", () => {
    expect(TableHeaderWrapper.find("TableHeaderCell")).toHaveLength(4);
  });

  test("renders header cells in the correct order and with the correct text", () => {
    TableHeaderWrapper.find("TableCell").forEach((cell, i) => {
      expect(cell.text()).toBe(columns[i].title);
    });
  });

  test("invokes the onSort prop onClick", () => {
    TableHeaderWrapper.find("TableHeaderCell")
      .at(0)
      .simulate("click");
    expect(jestSpy).toHaveBeenCalled();
  });
});

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "50%",
    onSort: jestSpy
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
