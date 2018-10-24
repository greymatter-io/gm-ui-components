import React from "react";
import { shallow } from "enzyme";
import IconMediaPause from "./IconMediaPause.svg";
describe("IconMediaPause", () => {
  it("matches snapshot", () => {
    
    const aIconMediaPause = shallow(<IconMediaPause />).find("IconMediaPause.svg").dive();
    console.log(aIconMediaPause.debug())
    expect(aIconMediaPause).toMatchSnapshot();
  });
});