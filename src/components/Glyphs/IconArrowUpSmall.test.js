import React from "react";
import { shallow } from "enzyme";
import IconArrowUpSmall from "./IconArrowUpSmall.svg";
describe("IconArrowUpSmall", () => {
  it("matches snapshot", () => {
    
    const aIconArrowUpSmall = shallow(<IconArrowUpSmall />).find("IconArrowUpSmall.svg").dive();
    console.log(aIconArrowUpSmall.debug())
    expect(aIconArrowUpSmall).toMatchSnapshot();
  });
});