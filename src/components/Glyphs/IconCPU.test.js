import React from "react";
import { shallow } from "enzyme";

import IconCPU from "./IconCPU";

describe("IconCPU", () => {
  it("matches snapshot", () => {
    const aIconCPU = shallow(<IconCPU />);
    expect(aIconCPU).toMatchSnapshot();
  });
});