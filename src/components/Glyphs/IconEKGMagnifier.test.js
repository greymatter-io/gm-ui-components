import React from "react";
import { shallow } from "enzyme";
import IconEKGMagnifier from "./IconEKGMagnifier.svg";
describe("IconEKGMagnifier", () => {
  it("matches snapshot", () => {
    
    const aIconEKGMagnifier = shallow(<IconEKGMagnifier />).find("IconEKGMagnifier.svg").dive();
    console.log(aIconEKGMagnifier.debug())
    expect(aIconEKGMagnifier).toMatchSnapshot();
  });
});