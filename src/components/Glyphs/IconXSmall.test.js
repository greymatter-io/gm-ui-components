import React from "react";
import { shallow } from "enzyme";

import IconXSmall from "./IconXSmall";

describe("IconXSmall", () => {
  it("matches snapshot", () => {
    const aIconXSmall = shallow(<IconXSmall />);
    expect(aIconXSmall).toMatchSnapshot();
  });
});