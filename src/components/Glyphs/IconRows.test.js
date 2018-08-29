import React from "react";
import { shallow } from "enzyme";

import IconRows from "./IconRows";

describe("IconRows", () => {
  it("matches snapshot", () => {
    const aIconRows = shallow(<IconRows />);
    expect(aIconRows).toMatchSnapshot();
  });
});