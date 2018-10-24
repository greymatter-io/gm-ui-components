import React from "react";
import { shallow } from "enzyme";
import IconChevronUp from "./IconChevronUp.svg";
describe("IconChevronUp", () => {
  it("matches snapshot", () => {
    
    const aIconChevronUp = shallow(<IconChevronUp />).find("IconChevronUp.svg").dive();
    console.log(aIconChevronUp.debug())
    expect(aIconChevronUp).toMatchSnapshot();
  });
});