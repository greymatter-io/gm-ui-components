import React from "react";
import { shallow } from "enzyme";
import IconHTTP2 from "./IconHTTP2.svg";
describe("IconHTTP2", () => {
  it("matches snapshot", () => {
    
    const aIconHTTP2 = shallow(<IconHTTP2 />).find("IconHTTP2.svg").dive();
    console.log(aIconHTTP2.debug())
    expect(aIconHTTP2).toMatchSnapshot();
  });
});