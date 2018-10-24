import React from "react";
import { shallow } from "enzyme";
import IconFileDocument from "./IconFileDocument.svg";
describe("IconFileDocument", () => {
  it("matches snapshot", () => {
    
    const aIconFileDocument = shallow(<IconFileDocument />).find("IconFileDocument.svg").dive();
    console.log(aIconFileDocument.debug())
    expect(aIconFileDocument).toMatchSnapshot();
  });
});