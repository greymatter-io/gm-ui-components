import React from "react";
import { shallow } from "enzyme";

import IconArrowUpSmall from "./IconArrowUpSmall";

describe("IconArrowUpSmall", () => {
  it("matches snapshot", () => {
    const aIconArrowUpSmall = shallow(<IconArrowUpSmall />);
    expect(aIconArrowUpSmall).toMatchSnapshot();
  });
});