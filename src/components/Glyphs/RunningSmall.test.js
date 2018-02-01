import React from "react";
import { shallow } from "enzyme";
import RunningSmall from "./RunningSmall";

describe("RunningSmall", () => {
  it("matches snapshot", () => {
    const aRunningSmall = shallow(<RunningSmall />);
    expect(aRunningSmall).toMatchSnapshot();
  });
});
