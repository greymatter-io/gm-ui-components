import React from "react";
import { shallow } from "enzyme";
import HttpPut from "./HttpPut";

describe("HttpPut", () => {
  it("matches snapshot", () => {
    const aHttpPut = shallow(<HttpPut />);
    expect(aHttpPut).toMatchSnapshot();
  });
});
