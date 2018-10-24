import React from "react";
import { shallow } from "enzyme";
import IconEllipsisVertical from "./IconEllipsisVertical.svg";
describe("IconEllipsisVertical", () => {
  it("matches snapshot", () => {
    
    const aIconEllipsisVertical = shallow(<IconEllipsisVertical />).find("IconEllipsisVertical.svg").dive();
    console.log(aIconEllipsisVertical.debug())
    expect(aIconEllipsisVertical).toMatchSnapshot();
  });
});