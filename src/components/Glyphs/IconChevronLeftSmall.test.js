import React from "react";
import { shallow } from "enzyme";
import IconChevronLeftSmall from "./IconChevronLeftSmall.svg";
describe("IconChevronLeftSmall", () => {
  it("matches snapshot", () => {
    
    const aIconChevronLeftSmall = shallow(<IconChevronLeftSmall />).find("IconChevronLeftSmall.svg").dive();
    console.log(aIconChevronLeftSmall.debug())
    expect(aIconChevronLeftSmall).toMatchSnapshot();
  });
});