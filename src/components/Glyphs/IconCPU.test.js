import React from "react";
import { shallow } from "enzyme";
import IconCPU from "./IconCPU.svg";
describe("IconCPU", () => {
  it("matches snapshot", () => {
    
    const aIconCPU = shallow(<IconCPU />).find("IconCPU.svg").dive();
    console.log(aIconCPU.debug())
    expect(aIconCPU).toMatchSnapshot();
  });
});