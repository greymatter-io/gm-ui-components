import React from "react";
import { shallow } from "enzyme";

import IconEllipsisVertical from "./IconEllipsisVertical";

describe("IconEllipsisVertical", () => {
  it("matches snapshot", () => {
    const aIconEllipsisVertical = shallow(<IconEllipsisVertical />);
    expect(aIconEllipsisVertical).toMatchSnapshot();
  });
});