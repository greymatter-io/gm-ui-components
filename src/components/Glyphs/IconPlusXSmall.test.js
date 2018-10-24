import React from "react";
import { shallow } from "enzyme";
import IconPlusXSmall from "./IconPlusXSmall.svg";
describe("IconPlusXSmall", () => {
  it("matches snapshot", () => {
    
    const aIconPlusXSmall = shallow(<IconPlusXSmall />).find("IconPlusXSmall.svg").dive();
    console.log(aIconPlusXSmall.debug())
    expect(aIconPlusXSmall).toMatchSnapshot();
  });
});