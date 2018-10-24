import React from "react";
import { shallow } from "enzyme";

import IconCycle from "./IconCycle.svg";

describe("IconCycle", () => {
  it("matches snapshot", () => {
    const aIconCycle = shallow(<IconCycle />);
    expect(aIconCycle).toMatchSnapshot();
  });
});