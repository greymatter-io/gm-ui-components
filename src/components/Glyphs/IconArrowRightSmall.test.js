import React from "react";
import { shallow } from "enzyme";

import IconArrowRightSmall from "./IconArrowRightSmall.svg";

describe("IconArrowRightSmall", () => {
  it("matches snapshot", () => {
    const aIconArrowRightSmall = shallow(<IconArrowRightSmall />);
    expect(aIconArrowRightSmall).toMatchSnapshot();
  });
});