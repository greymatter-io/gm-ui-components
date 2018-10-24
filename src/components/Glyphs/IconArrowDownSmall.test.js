import React from "react";
import { shallow } from "enzyme";

import IconArrowDownSmall from "./IconArrowDownSmall.svg";

describe("IconArrowDownSmall", () => {
  it("matches snapshot", () => {
    const aIconArrowDownSmall = shallow(<IconArrowDownSmall />).find("IconArrowDownSmall.svg");
    expect(aIconArrowDownSmall).toMatchSnapshot();
  });
});