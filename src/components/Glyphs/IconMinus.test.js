import React from "react";
import { shallow } from "enzyme";

import IconMinus from "./IconMinus";

describe("IconMinus", () => {
  it("matches snapshot", () => {
    const aIconMinus = shallow(<IconMinus />);
    expect(aIconMinus).toMatchSnapshot();
  });
});