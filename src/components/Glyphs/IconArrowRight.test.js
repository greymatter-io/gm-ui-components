import React from "react";
import { shallow } from "enzyme";
import IconArrowRight from "./IconArrowRight.svg";
describe("IconArrowRight", () => {
  it("matches snapshot", () => {
    
    const aIconArrowRight = shallow(<IconArrowRight />).find("IconArrowRight.svg").dive();
    console.log(aIconArrowRight.debug())
    expect(aIconArrowRight).toMatchSnapshot();
  });
});