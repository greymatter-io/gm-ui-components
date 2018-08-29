import React from "react";
import { shallow } from "enzyme";

import IconMagnifier from "./IconMagnifier";

describe("IconMagnifier", () => {
  it("matches snapshot", () => {
    const aIconMagnifier = shallow(<IconMagnifier />);
    expect(aIconMagnifier).toMatchSnapshot();
  });
});