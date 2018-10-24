import React from "react";
import { shallow } from "enzyme";
import IconObjectGhost from "./IconObjectGhost.svg";
describe("IconObjectGhost", () => {
  it("matches snapshot", () => {
    
    const aIconObjectGhost = shallow(<IconObjectGhost />).find("IconObjectGhost.svg").dive();
    console.log(aIconObjectGhost.debug())
    expect(aIconObjectGhost).toMatchSnapshot();
  });
});