import React from "react";
import { shallow } from "enzyme";

import IconCollapse from "./IconCollapse.svg";

describe("IconCollapse", () => {
  it("matches snapshot", () => {
    const aIconCollapse = shallow(<IconCollapse />);
    expect(aIconCollapse).toMatchSnapshot();
  });
});