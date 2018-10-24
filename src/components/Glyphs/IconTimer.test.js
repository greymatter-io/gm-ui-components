import React from "react";
import { shallow } from "enzyme";

import IconTimer from "./IconTimer.svg";

describe("IconTimer", () => {
  it("matches snapshot", () => {
    const aIconTimer = shallow(<IconTimer />);
    expect(aIconTimer).toMatchSnapshot();
  });
});