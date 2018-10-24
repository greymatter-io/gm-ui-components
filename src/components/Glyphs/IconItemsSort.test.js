import React from "react";
import { shallow } from "enzyme";

import IconItemsSort from "./IconItemsSort.svg";

describe("IconItemsSort", () => {
  it("matches snapshot", () => {
    const aIconItemsSort = shallow(<IconItemsSort />).find("IconItemsSort.svg");
    expect(aIconItemsSort).toMatchSnapshot();
  });
});