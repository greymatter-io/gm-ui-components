import React from "react";
import { shallow } from "enzyme";

import IconFolder from "./IconFolder";

describe("IconFolder", () => {
  it("matches snapshot", () => {
    const aIconFolder = shallow(<IconFolder />);
    expect(aIconFolder).toMatchSnapshot();
  });
});