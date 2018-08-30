import React from "react";
import { shallow } from "enzyme";

import IconObjectSpreadsheet from "./IconObjectSpreadsheet";

describe("IconObjectSpreadsheet", () => {
  it("matches snapshot", () => {
    const aIconObjectSpreadsheet = shallow(<IconObjectSpreadsheet />);
    expect(aIconObjectSpreadsheet).toMatchSnapshot();
  });
});