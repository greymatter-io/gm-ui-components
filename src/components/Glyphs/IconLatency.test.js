import React from "react";
import { shallow } from "enzyme";

import IconLatency from "./IconLatency.svg";

describe("IconLatency", () => {
  it("matches snapshot", () => {
    const aIconLatency = shallow(<IconLatency />).find("IconLatency.svg");
    expect(aIconLatency).toMatchSnapshot();
  });
});