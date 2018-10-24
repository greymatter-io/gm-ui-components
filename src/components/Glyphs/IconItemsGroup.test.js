import React from "react";
import { shallow } from "enzyme";

import IconItemsGroup from "./IconItemsGroup.svg";

describe("IconItemsGroup", () => {
  it("matches snapshot", () => {
    const aIconItemsGroup = shallow(<IconItemsGroup />);
    expect(aIconItemsGroup).toMatchSnapshot();
  });
});