import React from "react";
import { shallow } from "enzyme";

import IconChevronRight from "./IconChevronRight.svg";

describe("IconChevronRight", () => {
  it("matches snapshot", () => {
    const aIconChevronRight = shallow(<IconChevronRight />);
    expect(aIconChevronRight).toMatchSnapshot();
  });
});