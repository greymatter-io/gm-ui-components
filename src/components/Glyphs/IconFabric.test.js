import React from "react";
import { shallow } from "enzyme";
import IconFabric from "./IconFabric.svg";
describe("IconFabric", () => {
  it("matches snapshot", () => {
    
    const aIconFabric = shallow(<IconFabric />).find("IconFabric.svg").dive();
    console.log(aIconFabric.debug())
    expect(aIconFabric).toMatchSnapshot();
  });
});