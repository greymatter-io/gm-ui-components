import React from "react";
import { shallow } from "enzyme";

import IconItemsGrid from "./IconItemsGrid.svg";

describe("IconItemsGrid", () => {
  it("matches snapshot", () => {
    const aIconItemsGrid = shallow(<IconItemsGrid />);
    expect(aIconItemsGrid).toMatchSnapshot();
  });
});