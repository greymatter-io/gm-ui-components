import React from "react";
import { shallow } from "enzyme";

import IconStateRunning from "./IconStateRunning.svg";

describe("IconStateRunning", () => {
  it("matches snapshot", () => {
    const aIconStateRunning = shallow(<IconStateRunning />).find("IconStateRunning.svg");
    expect(aIconStateRunning).toMatchSnapshot();
  });
});