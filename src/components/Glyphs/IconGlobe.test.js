import React from "react";
import { shallow } from "enzyme";

import IconGlobe from "./IconGlobe";

describe("IconGlobe", () => {
  it("matches snapshot", () => {
    const aIconGlobe = shallow(<IconGlobe />);
    expect(aIconGlobe).toMatchSnapshot();
  });
});