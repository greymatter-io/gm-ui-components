import React from "react";
import { shallow } from "enzyme";
import ReadoutItemData from "./ReadoutItemData";

describe("ReadoutItemData", () => {
  it("matches snapshot", () => {
    const aReadoutItemData = shallow(<ReadoutItemData />);
    expect(aReadoutItemData).toMatchSnapshot();
  });
  // We are not yet able to match children elements
  xit("allows padding-left of first-child to be overridden", () => {
    const aReadoutItemData = shallow(<ReadoutItemData paddingLeft="99px" />);
    expect(aReadoutItemData).toHaveStyleRule("padding", "99px 0");
  });
});
