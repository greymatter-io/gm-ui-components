import React from "react";
import { shallow } from "enzyme";
import List from "./List";

describe("List", () => {
  it("matches snapshot", () => {
    const aList = shallow(<List />);
    expect(aList).toMatchSnapshot();
  });
});
