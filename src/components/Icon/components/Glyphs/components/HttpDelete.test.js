import React from "react";
import { shallow } from "enzyme";
import HttpDelete from "./HttpDelete";

describe("HttpDelete", () => {
  it("matches snapshot", () => {
    const aHttpDelete = shallow(<HttpDelete />);
    expect(aHttpDelete).toMatchSnapshot();
  });
});
