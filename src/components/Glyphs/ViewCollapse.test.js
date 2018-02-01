import React from "react";
import { shallow } from "enzyme";
import ViewCollapse from "./ViewCollapse";

describe("ViewCollapse", () => {
  it("matches snapshot", () => {
    const aViewCollapse = shallow(<ViewCollapse />);
    expect(aViewCollapse).toMatchSnapshot();
  });
});
