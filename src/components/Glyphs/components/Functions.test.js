import React from "react";
import { shallow } from "enzyme";
import Functions from "./Functions";

describe("Functions", () => {
  it("matches snapshot", () => {
    const aFunctions = shallow(<Functions />);
    expect(aFunctions).toMatchSnapshot();
  });
});
