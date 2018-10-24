import React from "react";
import { shallow } from "enzyme";
import IconStateStopped from "./IconStateStopped.svg";
describe("IconStateStopped", () => {
  it("matches snapshot", () => {
    
    const aIconStateStopped = shallow(<IconStateStopped />).find("IconStateStopped.svg").dive();
    console.log(aIconStateStopped.debug())
    expect(aIconStateStopped).toMatchSnapshot();
  });
});