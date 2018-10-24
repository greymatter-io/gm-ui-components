import React from "react";
import { shallow } from "enzyme";
import IconCycle from "./IconCycle.svg";
describe("IconCycle", () => {
  it("matches snapshot", () => {
    
    const aIconCycle = shallow(<IconCycle />).find("IconCycle.svg").dive();
    console.log(aIconCycle.debug())
    expect(aIconCycle).toMatchSnapshot();
  });
});