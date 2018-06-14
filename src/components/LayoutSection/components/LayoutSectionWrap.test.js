import React from "react";
import { shallow } from "enzyme";
import LayoutSectionWrap from "./LayoutSectionWrap";

describe("LayoutSectionWrap", () => {
  it("matches snapshot", () => {
    const aLayoutSectionWrap = shallow(<LayoutSectionWrap />);
    expect(aLayoutSectionWrap).toMatchSnapshot();
  });
});
