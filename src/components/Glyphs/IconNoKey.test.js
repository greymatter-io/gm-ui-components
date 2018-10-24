import React from "react";
import { shallow } from "enzyme";
import IconNoKey from "./IconNoKey.svg";
describe("IconNoKey", () => {
  it("matches snapshot", () => {
    
    const aIconNoKey = shallow(<IconNoKey />).find("IconNoKey.svg").dive();
    console.log(aIconNoKey.debug())
    expect(aIconNoKey).toMatchSnapshot();
  });
});