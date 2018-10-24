import React from "react";
import { shallow } from "enzyme";
import IconConfiguration from "./IconConfiguration.svg";
describe("IconConfiguration", () => {
  it("matches snapshot", () => {
    
    const aIconConfiguration = shallow(<IconConfiguration />).find("IconConfiguration.svg").dive();
    console.log(aIconConfiguration.debug())
    expect(aIconConfiguration).toMatchSnapshot();
  });
});