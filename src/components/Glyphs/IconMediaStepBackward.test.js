import React from "react";
import { shallow } from "enzyme";

import IconMediaStepBackward from "./IconMediaStepBackward.svg";

describe("IconMediaStepBackward", () => {
  it("matches snapshot", () => {
    const aIconMediaStepBackward = shallow(<IconMediaStepBackward />).find("IconMediaStepBackward.svg");
    expect(aIconMediaStepBackward).toMatchSnapshot();
  });
});