import React from "react";
import { shallow } from "enzyme";

import IconViewCollapse from "./IconViewCollapse.svg";

describe("IconViewCollapse", () => {
  it("matches snapshot", () => {
    const aIconViewCollapse = shallow(<IconViewCollapse />);
    expect(aIconViewCollapse).toMatchSnapshot();
  });
});