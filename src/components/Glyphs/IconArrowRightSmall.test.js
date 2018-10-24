import React from "react";
import { shallow } from "enzyme";
import IconArrowRightSmall from "./IconArrowRightSmall.svg";
describe("IconArrowRightSmall", () => {
  it("matches snapshot", () => {
    
    const aIconArrowRightSmall = shallow(<IconArrowRightSmall />).find("IconArrowRightSmall.svg").dive();
    console.log(aIconArrowRightSmall.debug())
    expect(aIconArrowRightSmall).toMatchSnapshot();
  });
});