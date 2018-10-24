import React from "react";
import { shallow } from "enzyme";
import IconFileGhost from "./IconFileGhost.svg";
describe("IconFileGhost", () => {
  it("matches snapshot", () => {
    
    const aIconFileGhost = shallow(<IconFileGhost />).find("IconFileGhost.svg").dive();
    console.log(aIconFileGhost.debug())
    expect(aIconFileGhost).toMatchSnapshot();
  });
});