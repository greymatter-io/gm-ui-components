import React from "react";
import { shallow } from "enzyme";

import IconItemsSort from "./IconItemsSort.svg";

describe("IconItemsSort", () => {
  it("matches snapshot", () => {
    const aIconItemsSort = shallow(<IconItemsSort />);
    expect(aIconItemsSort).toMatchSnapshot();
  });
});