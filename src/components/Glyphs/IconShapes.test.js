import React from "react";
import { shallow } from "enzyme";

import IconShapes from "./IconShapes.svg";

describe("IconShapes", () => {
  it("matches snapshot", () => {
    const aIconShapes = shallow(<IconShapes />).find("IconShapes.svg");
    expect(aIconShapes).toMatchSnapshot();
  });
});