import React from "react";
import { shallow } from "enzyme";
import IconTriangleThin from "./IconTriangleThin.svg";
describe("IconTriangleThin", () => {
  it("matches snapshot", () => {
    
    const aIconTriangleThin = shallow(<IconTriangleThin />).find("IconTriangleThin.svg").dive();
    console.log(aIconTriangleThin.debug())
    expect(aIconTriangleThin).toMatchSnapshot();
  });
});