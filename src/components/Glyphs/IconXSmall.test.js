import React from "react";
import { shallow } from "enzyme";
import IconXSmall from "./IconXSmall.svg";
describe("IconXSmall", () => {
  it("matches snapshot", () => {
    
    const aIconXSmall = shallow(<IconXSmall />).find("IconXSmall.svg").dive();
    console.log(aIconXSmall.debug())
    expect(aIconXSmall).toMatchSnapshot();
  });
});