import React from "react";
import { shallow } from "enzyme";
import IconServices from "./IconServices.svg";
describe("IconServices", () => {
  it("matches snapshot", () => {
    
    const aIconServices = shallow(<IconServices />).find("IconServices.svg").dive();
    console.log(aIconServices.debug())
    expect(aIconServices).toMatchSnapshot();
  });
});