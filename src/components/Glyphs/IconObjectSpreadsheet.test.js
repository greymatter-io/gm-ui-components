import React from "react";
import { shallow } from "enzyme";

import IconObjectSpreadsheet from "./IconObjectSpreadsheet.svg";

describe("IconObjectSpreadsheet", () => {
  it("matches snapshot", () => {
    const aIconObjectSpreadsheet = shallow(<IconObjectSpreadsheet />).find("IconObjectSpreadsheet.svg");
    expect(aIconObjectSpreadsheet).toMatchSnapshot();
  });
});