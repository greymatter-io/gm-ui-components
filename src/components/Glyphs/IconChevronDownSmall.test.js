import React from "react";
import { shallow } from "enzyme";
import IconChevronDownSmall from "./IconChevronDownSmall.svg";
describe("IconChevronDownSmall", () => {
  it("matches snapshot", () => {
    
    const aIconChevronDownSmall = shallow(<IconChevronDownSmall />).find("IconChevronDownSmall.svg").dive();
    console.log(aIconChevronDownSmall.debug())
    expect(aIconChevronDownSmall).toMatchSnapshot();
  });
});