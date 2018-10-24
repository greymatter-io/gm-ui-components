import React from "react";
import { shallow } from "enzyme";

import IconArrowDown from "./IconArrowDown.svg";

describe("IconArrowDown", () => {
  it("matches snapshot", () => {
    const aIconArrowDown = shallow(<IconArrowDown />).find("IconArrowDown.svg");
    expect(aIconArrowDown).toMatchSnapshot();
  });
});