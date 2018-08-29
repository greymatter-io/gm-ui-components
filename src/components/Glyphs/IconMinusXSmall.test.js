import React from "react";
import { shallow } from "enzyme";

import IconMinusXSmall from "./IconMinusXSmall";

describe("IconMinusXSmall", () => {
  it("matches snapshot", () => {
    const aIconMinusXSmall = shallow(<IconMinusXSmall />);
    expect(aIconMinusXSmall).toMatchSnapshot();
  });
});