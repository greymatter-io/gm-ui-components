import React from "react";
import { shallow } from "enzyme";

import IconStack from "./IconStack.svg";

describe("IconStack", () => {
  it("matches snapshot", () => {
    const aIconStack = shallow(<IconStack />).find("IconStack.svg");
    expect(aIconStack).toMatchSnapshot();
  });
});