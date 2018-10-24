import React from "react";
import { shallow } from "enzyme";
import IconFileSpreadsheet from "./IconFileSpreadsheet.svg";
describe("IconFileSpreadsheet", () => {
  it("matches snapshot", () => {
    
    const aIconFileSpreadsheet = shallow(<IconFileSpreadsheet />).find("IconFileSpreadsheet.svg").dive();
    console.log(aIconFileSpreadsheet.debug())
    expect(aIconFileSpreadsheet).toMatchSnapshot();
  });
});