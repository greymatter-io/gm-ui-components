import React from "react";
import { shallow } from "enzyme";

import IconCog from "./IconCog";

describe("IconCog", () => {
  it("matches snapshot", () => {
    const aIconCog = shallow(<IconCog />);
    expect(aIconCog).toMatchSnapshot();
  });
});