import React from "react";
import { shallow } from "enzyme";
import IconObjectExpand from "./IconObjectExpand.svg";
describe("IconObjectExpand", () => {
  it("matches snapshot", () => {
    
    const aIconObjectExpand = shallow(<IconObjectExpand />).find("IconObjectExpand.svg").dive();
    console.log(aIconObjectExpand.debug())
    expect(aIconObjectExpand).toMatchSnapshot();
  });
});