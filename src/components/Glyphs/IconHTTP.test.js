import React from "react";
import { shallow } from "enzyme";
import IconHTTP from "./IconHTTP.svg";
describe("IconHTTP", () => {
  it("matches snapshot", () => {
    
    const aIconHTTP = shallow(<IconHTTP />).find("IconHTTP.svg").dive();
    console.log(aIconHTTP.debug())
    expect(aIconHTTP).toMatchSnapshot();
  });
});