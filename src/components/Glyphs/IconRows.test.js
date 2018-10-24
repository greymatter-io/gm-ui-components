import React from "react";
import { shallow } from "enzyme";

import IconRows from "./IconRows.svg";

describe("IconRows", () => {
  it("matches snapshot", () => {
    const aIconRows = shallow(<IconRows />);
    expect(aIconRows).toMatchSnapshot();
  });
});