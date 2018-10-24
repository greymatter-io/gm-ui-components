import React from "react";
import { shallow } from "enzyme";

import IconMinus from "./IconMinus.svg";

describe("IconMinus", () => {
  it("matches snapshot", () => {
    const aIconMinus = shallow(<IconMinus />).find("IconMinus.svg");
    expect(aIconMinus).toMatchSnapshot();
  });
});