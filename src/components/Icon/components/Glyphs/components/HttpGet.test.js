import React from "react";
import { shallow } from "enzyme";
import HttpGet from "./HttpGet";

describe("HttpGet", () => {
  it("matches snapshot", () => {
    const aHttpGet = shallow(<HttpGet />);
    expect(aHttpGet).toMatchSnapshot();
  });
});
