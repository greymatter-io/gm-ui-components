import React from "react";
import { shallow } from "enzyme";
import IconObjectSpreadsheet from "./IconObjectSpreadsheet.svg";
describe("IconObjectSpreadsheet", () => {
  it("matches snapshot", () => {
    
    const aIconObjectSpreadsheet = shallow(<IconObjectSpreadsheet />).find("IconObjectSpreadsheet.svg").dive();
    console.log(aIconObjectSpreadsheet.debug())
    expect(aIconObjectSpreadsheet).toMatchSnapshot();
  });
});