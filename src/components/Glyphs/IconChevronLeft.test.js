import React from "react";
import { shallow } from "enzyme";
import IconChevronLeft from "./IconChevronLeft.svg";
describe("IconChevronLeft", () => {
  it("matches snapshot", () => {
    
    const aIconChevronLeft = shallow(<IconChevronLeft />).find("IconChevronLeft.svg").dive();
    console.log(aIconChevronLeft.debug())
    expect(aIconChevronLeft).toMatchSnapshot();
  });
});