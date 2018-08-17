import React from "react";
import { shallow } from "enzyme";

import IconChevronDownSmall from "./IconChevronDownSmall";

describe("IconChevronDownSmall", () => {
  it("matches snapshot", () => {
    const aIconChevronDownSmall = shallow(<IconChevronDownSmall />);
    expect(aIconChevronDownSmall).toMatchSnapshot();
  });
});