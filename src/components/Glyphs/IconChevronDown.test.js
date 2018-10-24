import React from "react";
import { shallow } from "enzyme";

import IconChevronDown from "./IconChevronDown.svg";

describe("IconChevronDown", () => {
  it("matches snapshot", () => {
    const aIconChevronDown = shallow(<IconChevronDown />);
    expect(aIconChevronDown).toMatchSnapshot();
  });
});