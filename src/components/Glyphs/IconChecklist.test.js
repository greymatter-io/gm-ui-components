import React from "react";
import { shallow } from "enzyme";

import IconChecklist from "./IconChecklist.svg";

describe("IconChecklist", () => {
  it("matches snapshot", () => {
    const aIconChecklist = shallow(<IconChecklist />).find("IconChecklist.svg");
    expect(aIconChecklist).toMatchSnapshot();
  });
});