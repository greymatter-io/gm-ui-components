import React from "react";
import { shallow } from "enzyme";

import IconTriangleThick from "./IconTriangleThick";

describe("IconTriangleThick", () => {
  it("matches snapshot", () => {
    const aIconTriangleThick = shallow(<IconTriangleThick />);
    expect(aIconTriangleThick).toMatchSnapshot();
  });
});