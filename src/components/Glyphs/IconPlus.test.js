import React from "react";
import { shallow } from "enzyme";
import IconPlus from "./IconPlus.svg";
describe("IconPlus", () => {
  it("matches snapshot", () => {
    
    const aIconPlus = shallow(<IconPlus />).find("IconPlus.svg").dive();
    console.log(aIconPlus.debug())
    expect(aIconPlus).toMatchSnapshot();
  });
});