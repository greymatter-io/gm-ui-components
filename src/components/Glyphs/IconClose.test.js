import React from "react";
import { shallow } from "enzyme";

import IconClose from "./IconClose.svg";

describe("IconClose", () => {
  it("matches snapshot", () => {
    const aIconClose = shallow(<IconClose />).find("IconClose.svg");
    expect(aIconClose).toMatchSnapshot();
  });
});