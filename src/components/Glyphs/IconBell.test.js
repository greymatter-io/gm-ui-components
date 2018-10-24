import React from "react";
import { shallow } from "enzyme";
import IconBell from "./IconBell.svg";
describe("IconBell", () => {
  it("matches snapshot", () => {
    
    const aIconBell = shallow(<IconBell />).find("IconBell.svg").dive();
    console.log(aIconBell.debug())
    expect(aIconBell).toMatchSnapshot();
  });
});