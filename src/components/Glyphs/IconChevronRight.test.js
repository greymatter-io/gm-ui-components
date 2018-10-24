import React from "react";
import { shallow } from "enzyme";
import IconChevronRight from "./IconChevronRight.svg";
describe("IconChevronRight", () => {
  it("matches snapshot", () => {
    
    const aIconChevronRight = shallow(<IconChevronRight />).find("IconChevronRight.svg").dive();
    console.log(aIconChevronRight.debug())
    expect(aIconChevronRight).toMatchSnapshot();
  });
});