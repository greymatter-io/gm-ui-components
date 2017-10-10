import React from "react";
import { shallow } from "enzyme";
import BackgroundTriangle from "./BackgroundTriangle";

describe("BackgroundTriangle", () => {
  it("matches snapshot", () => {
    const aBackgroundTriangle = shallow(<BackgroundTriangle />);
    expect(aBackgroundTriangle).toMatchSnapshot();
  });
});
