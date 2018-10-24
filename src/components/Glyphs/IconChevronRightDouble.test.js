import React from "react";
import { shallow } from "enzyme";

import IconChevronRightDouble from "./IconChevronRightDouble.svg";

describe("IconChevronRightDouble", () => {
  it("matches snapshot", () => {
    const aIconChevronRightDouble = shallow(<IconChevronRightDouble />).find("IconChevronRightDouble.svg");
    expect(aIconChevronRightDouble).toMatchSnapshot();
  });
});