import React from "react";
import { shallow } from "enzyme";
import IconX from "./IconX.svg";
describe("IconX", () => {
  it("matches snapshot", () => {
    
    const aIconX = shallow(<IconX />).find("IconX.svg").dive();
    console.log(aIconX.debug())
    expect(aIconX).toMatchSnapshot();
  });
});