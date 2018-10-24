import React from "react";
import { shallow } from "enzyme";
import IconStatePaused from "./IconStatePaused.svg";
describe("IconStatePaused", () => {
  it("matches snapshot", () => {
    
    const aIconStatePaused = shallow(<IconStatePaused />).find("IconStatePaused.svg").dive();
    console.log(aIconStatePaused.debug())
    expect(aIconStatePaused).toMatchSnapshot();
  });
});