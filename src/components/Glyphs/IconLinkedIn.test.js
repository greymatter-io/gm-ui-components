import React from "react";
import { shallow } from "enzyme";
import IconLinkedIn from "./IconLinkedIn.svg";
describe("IconLinkedIn", () => {
  it("matches snapshot", () => {
    
    const aIconLinkedIn = shallow(<IconLinkedIn />).find("IconLinkedIn.svg").dive();
    console.log(aIconLinkedIn.debug())
    expect(aIconLinkedIn).toMatchSnapshot();
  });
});