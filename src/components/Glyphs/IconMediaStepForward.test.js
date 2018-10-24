import React from "react";
import { shallow } from "enzyme";

import IconMediaStepForward from "./IconMediaStepForward.svg";

describe("IconMediaStepForward", () => {
  it("matches snapshot", () => {
    const aIconMediaStepForward = shallow(<IconMediaStepForward />);
    expect(aIconMediaStepForward).toMatchSnapshot();
  });
});