import React from "react";
import { shallow } from "enzyme";

import IconEKGMagnifier from "./IconEKGMagnifier";

describe("IconEKGMagnifier", () => {
  it("matches snapshot", () => {
    const aIconEKGMagnifier = shallow(<IconEKGMagnifier />);
    expect(aIconEKGMagnifier).toMatchSnapshot();
  });
});