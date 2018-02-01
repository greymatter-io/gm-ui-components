import React from "react";
import { shallow } from "enzyme";
import Rows from "./Rows";

describe("Rows", () => {
  it("matches snapshot", () => {
    const aRows = shallow(<Rows />);
    expect(aRows).toMatchSnapshot();
  });
});
