import React from "react";
import { shallow } from "enzyme";
import IconInstances from "./IconInstances.svg";
describe("IconInstances", () => {
  it("matches snapshot", () => {
    
    const aIconInstances = shallow(<IconInstances />).find("IconInstances.svg").dive();
    console.log(aIconInstances.debug())
    expect(aIconInstances).toMatchSnapshot();
  });
});