import React from "react";
import { shallow } from "enzyme";

import IconMinusSmall from "./IconMinusSmall";

describe("IconMinusSmall", () => {
  it("matches snapshot", () => {
    const aIconMinusSmall = shallow(<IconMinusSmall />);
    expect(aIconMinusSmall).toMatchSnapshot();
  });
});