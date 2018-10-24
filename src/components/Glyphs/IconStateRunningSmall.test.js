import React from "react";
import { shallow } from "enzyme";

import IconStateRunningSmall from "./IconStateRunningSmall.svg";

describe("IconStateRunningSmall", () => {
  it("matches snapshot", () => {
    const aIconStateRunningSmall = shallow(<IconStateRunningSmall />).find("IconStateRunningSmall.svg");
    expect(aIconStateRunningSmall).toMatchSnapshot();
  });
});