import React from "react";
import { shallow } from "enzyme";

import IconCircleThick from "./IconCircleThick.svg";

describe("IconCircleThick", () => {
  it("matches snapshot", () => {
    const aIconCircleThick = shallow(<IconCircleThick />).find("IconCircleThick.svg");
    expect(aIconCircleThick).toMatchSnapshot();
  });
});