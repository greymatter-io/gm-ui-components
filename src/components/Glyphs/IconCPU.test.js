import React from "react";
import { shallow } from "enzyme";

import IconCPU from "./IconCPU.svg";

describe("IconCPU", () => {
  it("matches snapshot", () => {
    const aIconCPU = shallow(<IconCPU />);
    expect(aIconCPU).toMatchSnapshot();
  });
});