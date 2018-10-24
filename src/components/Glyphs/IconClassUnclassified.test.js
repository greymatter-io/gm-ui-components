import React from "react";
import { shallow } from "enzyme";
import IconClassUnclassified from "./IconClassUnclassified.svg";
describe("IconClassUnclassified", () => {
  it("matches snapshot", () => {
    
    const aIconClassUnclassified = shallow(<IconClassUnclassified />).find("IconClassUnclassified.svg").dive();
    console.log(aIconClassUnclassified.debug())
    expect(aIconClassUnclassified).toMatchSnapshot();
  });
});