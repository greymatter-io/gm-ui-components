import React from "react";
import { shallow } from "enzyme";

import IconChevronLeftSmall from "./IconChevronLeftSmall";

describe("IconChevronLeftSmall", () => {
  it("matches snapshot", () => {
    const aIconChevronLeftSmall = shallow(<IconChevronLeftSmall />);
    expect(aIconChevronLeftSmall).toMatchSnapshot();
  });
});