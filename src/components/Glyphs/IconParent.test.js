import React from "react";
import { shallow } from "enzyme";

import IconParent from "./IconParent";

describe("IconParent", () => {
  it("matches snapshot", () => {
    const aIconParent = shallow(<IconParent />);
    expect(aIconParent).toMatchSnapshot();
  });
});