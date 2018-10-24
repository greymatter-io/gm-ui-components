import React from "react";
import { shallow } from "enzyme";
import IconFolder from "./IconFolder.svg";
describe("IconFolder", () => {
  it("matches snapshot", () => {
    
    const aIconFolder = shallow(<IconFolder />).find("IconFolder.svg").dive();
    console.log(aIconFolder.debug())
    expect(aIconFolder).toMatchSnapshot();
  });
});