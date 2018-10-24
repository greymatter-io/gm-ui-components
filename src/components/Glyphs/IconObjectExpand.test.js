import React from "react";
import { shallow } from "enzyme";

import IconObjectExpand from "./IconObjectExpand.svg";

describe("IconObjectExpand", () => {
  it("matches snapshot", () => {
    const aIconObjectExpand = shallow(<IconObjectExpand />);
    expect(aIconObjectExpand).toMatchSnapshot();
  });
});