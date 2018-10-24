import React from "react";
import { shallow } from "enzyme";

import IconParent from "./IconParent.svg";

describe("IconParent", () => {
  it("matches snapshot", () => {
    const aIconParent = shallow(<IconParent />).find("IconParent.svg");
    expect(aIconParent).toMatchSnapshot();
  });
});