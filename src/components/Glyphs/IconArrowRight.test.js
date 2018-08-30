import React from "react";
import { shallow } from "enzyme";

import IconArrowRight from "./IconArrowRight";

describe("IconArrowRight", () => {
  it("matches snapshot", () => {
    const aIconArrowRight = shallow(<IconArrowRight />);
    expect(aIconArrowRight).toMatchSnapshot();
  });
});