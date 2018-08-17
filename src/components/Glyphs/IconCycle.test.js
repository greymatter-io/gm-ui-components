import React from "react";
import { shallow } from "enzyme";

import IconCycle from "./IconCycle";

describe("IconCycle", () => {
  it("matches snapshot", () => {
    const aIconCycle = shallow(<IconCycle />);
    expect(aIconCycle).toMatchSnapshot();
  });
});