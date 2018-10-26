import React from "react";
import { shallow } from "enzyme";

import IconChevronRightDouble from "./IconChevronRightDouble";

describe("IconChevronRightDouble", () => {
  it("matches snapshot", () => {
    const aIconChevronRightDouble = shallow(<IconChevronRightDouble />);
    expect(aIconChevronRightDouble).toMatchSnapshot();
  });
});
