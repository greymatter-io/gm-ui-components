import React from "react";
import { shallow } from "enzyme";
import BackgroundSquircle from "./BackgroundSquircle";

describe("BackgroundSquircle", () => {
  it("matches snapshot", () => {
    const aBackgroundSquircle = shallow(<BackgroundSquircle />);
    expect(aBackgroundSquircle).toMatchSnapshot();
  });
});
