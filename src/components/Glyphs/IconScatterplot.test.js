import React from "react";
import { shallow } from "enzyme";

import IconScatterplot from "./IconScatterplot";

describe("IconScatterplot", () => {
  it("matches snapshot", () => {
    const aIconScatterplot = shallow(<IconScatterplot />);
    expect(aIconScatterplot).toMatchSnapshot();
  });
});