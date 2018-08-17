import React from "react";
import { shallow } from "enzyme";

import IconArrowDownSmall from "./IconArrowDownSmall";

describe("IconArrowDownSmall", () => {
  it("matches snapshot", () => {
    const aIconArrowDownSmall = shallow(<IconArrowDownSmall />);
    expect(aIconArrowDownSmall).toMatchSnapshot();
  });
});