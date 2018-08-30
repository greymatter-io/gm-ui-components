import React from "react";
import { shallow } from "enzyme";

import IconStack from "./IconStack";

describe("IconStack", () => {
  it("matches snapshot", () => {
    const aIconStack = shallow(<IconStack />);
    expect(aIconStack).toMatchSnapshot();
  });
});