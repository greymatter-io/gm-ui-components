import React from "react";
import { shallow } from "enzyme";

import IconArrowRight from "./IconArrowRight.svg";

describe("IconArrowRight", () => {
  it("matches snapshot", () => {
    const aIconArrowRight = shallow(<IconArrowRight />);
    expect(aIconArrowRight).toMatchSnapshot();
  });
});