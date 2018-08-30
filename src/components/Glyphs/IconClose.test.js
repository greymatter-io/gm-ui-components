import React from "react";
import { shallow } from "enzyme";

import IconClose from "./IconClose";

describe("IconClose", () => {
  it("matches snapshot", () => {
    const aIconClose = shallow(<IconClose />);
    expect(aIconClose).toMatchSnapshot();
  });
});