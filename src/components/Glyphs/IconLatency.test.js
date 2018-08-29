import React from "react";
import { shallow } from "enzyme";

import IconLatency from "./IconLatency";

describe("IconLatency", () => {
  it("matches snapshot", () => {
    const aIconLatency = shallow(<IconLatency />);
    expect(aIconLatency).toMatchSnapshot();
  });
});