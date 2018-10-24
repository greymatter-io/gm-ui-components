import React from "react";
import { shallow } from "enzyme";

import IconIdle from "./IconIdle.svg";

describe("IconIdle", () => {
  it("matches snapshot", () => {
    const aIconIdle = shallow(<IconIdle />).find("IconIdle.svg");
    expect(aIconIdle).toMatchSnapshot();
  });
});