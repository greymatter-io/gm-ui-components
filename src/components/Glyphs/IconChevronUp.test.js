import React from "react";
import { shallow } from "enzyme";

import IconChevronUp from "./IconChevronUp";

describe("IconChevronUp", () => {
  it("matches snapshot", () => {
    const aIconChevronUp = shallow(<IconChevronUp />);
    expect(aIconChevronUp).toMatchSnapshot();
  });
});