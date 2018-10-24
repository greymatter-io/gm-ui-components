import React from "react";
import { shallow } from "enzyme";

import IconMediaStepBackward from "./IconMediaStepBackward.svg";

describe("IconMediaStepBackward", () => {
  it("matches snapshot", () => {
    const aIconMediaStepBackward = shallow(<IconMediaStepBackward />);
    expect(aIconMediaStepBackward).toMatchSnapshot();
  });
});