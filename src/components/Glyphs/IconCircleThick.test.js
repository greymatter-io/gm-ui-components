import React from "react";
import { shallow } from "enzyme";

import IconCircleThick from "./IconCircleThick";

describe("IconCircleThick", () => {
  it("matches snapshot", () => {
    const aIconCircleThick = shallow(<IconCircleThick />);
    expect(aIconCircleThick).toMatchSnapshot();
  });
});