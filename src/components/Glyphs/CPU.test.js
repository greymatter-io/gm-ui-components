import React from "react";
import { shallow } from "enzyme";
import CPU from "./CPU";

describe("CPU", () => {
  it("matches snapshot", () => {
    const aCPU = shallow(<CPU />);
    expect(aCPU).toMatchSnapshot();
  });
});
