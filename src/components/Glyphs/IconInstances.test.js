import React from "react";
import { shallow } from "enzyme";

import IconInstances from "./IconInstances";

describe("IconInstances", () => {
  it("matches snapshot", () => {
    const aIconInstances = shallow(<IconInstances />);
    expect(aIconInstances).toMatchSnapshot();
  });
});