import React from "react";
import { shallow } from "enzyme";
import IconFileFind from "./IconFileFind.svg";
describe("IconFileFind", () => {
  it("matches snapshot", () => {
    
    const aIconFileFind = shallow(<IconFileFind />).find("IconFileFind.svg").dive();
    console.log(aIconFileFind.debug())
    expect(aIconFileFind).toMatchSnapshot();
  });
});