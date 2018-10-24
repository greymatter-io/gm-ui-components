import React from "react";
import { shallow } from "enzyme";
import IconClassSecret from "./IconClassSecret.svg";
describe("IconClassSecret", () => {
  it("matches snapshot", () => {
    
    const aIconClassSecret = shallow(<IconClassSecret />).find("IconClassSecret.svg").dive();
    console.log(aIconClassSecret.debug())
    expect(aIconClassSecret).toMatchSnapshot();
  });
});