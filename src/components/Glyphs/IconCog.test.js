import React from "react";
import { shallow } from "enzyme";
import IconCog from "./IconCog.svg";
describe("IconCog", () => {
  it("matches snapshot", () => {
    
    const aIconCog = shallow(<IconCog />).find("IconCog.svg").dive();
    console.log(aIconCog.debug())
    expect(aIconCog).toMatchSnapshot();
  });
});