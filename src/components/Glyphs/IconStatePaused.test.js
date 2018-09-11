import React from "react";
import { shallow } from "enzyme";

import IconStatePaused from "./IconStatePaused";

describe("IconStatePaused", () => {
  it("matches snapshot", () => {
    const aIconStatePaused = shallow(<IconStatePaused />);
    expect(aIconStatePaused).toMatchSnapshot();
  });
});