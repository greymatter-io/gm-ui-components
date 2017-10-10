import React from "react";
import { shallow } from "enzyme";
import BackgroundTriangleSmall from "./BackgroundTriangleSmall";

describe("BackgroundTriangleSmall", () => {
  it("matches snapshot", () => {
    const aBackgroundTriangleSmall = shallow(<BackgroundTriangleSmall />);
    expect(aBackgroundTriangleSmall).toMatchSnapshot();
  });
});
