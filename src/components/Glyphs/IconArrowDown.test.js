import React from "react";
import { shallow } from "enzyme";

import IconArrowDown from "./IconArrowDown";

describe("IconArrowDown", () => {
  it("matches snapshot", () => {
    const aIconArrowDown = shallow(<IconArrowDown />);
    expect(aIconArrowDown).toMatchSnapshot();
  });
});