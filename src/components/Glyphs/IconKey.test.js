import React from "react";
import { shallow } from "enzyme";
import IconKey from "./IconKey.svg";
describe("IconKey", () => {
  it("matches snapshot", () => {
    
    const aIconKey = shallow(<IconKey />).find("IconKey.svg").dive();
    console.log(aIconKey.debug())
    expect(aIconKey).toMatchSnapshot();
  });
});