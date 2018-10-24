import React from "react";
import { shallow } from "enzyme";

import IconItemsFilter from "./IconItemsFilter.svg";

describe("IconItemsFilter", () => {
  it("matches snapshot", () => {
    const aIconItemsFilter = shallow(<IconItemsFilter />);
    expect(aIconItemsFilter).toMatchSnapshot();
  });
});