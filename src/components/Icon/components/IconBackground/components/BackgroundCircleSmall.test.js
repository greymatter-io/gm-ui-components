import React from "react";
import { shallow } from "enzyme";
import BackgroundCircleSmall from "./BackgroundCircleSmall";

describe("BackgroundCircleSmall", () => {
  it("matches snapshot", () => {
    const aBackgroundCircleSmall = shallow(<BackgroundCircleSmall />);
    expect(aBackgroundCircleSmall).toMatchSnapshot();
  });
});
