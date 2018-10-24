import React from "react";
import { shallow } from "enzyme";

import IconChevronRightSmall from "./IconChevronRightSmall.svg";

describe("IconChevronRightSmall", () => {
  it("matches snapshot", () => {
    const aIconChevronRightSmall = shallow(<IconChevronRightSmall />).find("IconChevronRightSmall.svg");
    expect(aIconChevronRightSmall).toMatchSnapshot();
  });
});