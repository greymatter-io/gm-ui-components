import React from "react";
import { shallow } from "enzyme";

import IconItemsRows from "./IconItemsRows";

describe("IconItemsRows", () => {
  it("matches snapshot", () => {
    const aIconItemsRows = shallow(<IconItemsRows />);
    expect(aIconItemsRows).toMatchSnapshot();
  });
});