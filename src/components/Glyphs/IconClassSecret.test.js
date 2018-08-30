import React from "react";
import { shallow } from "enzyme";

import IconClassSecret from "./IconClassSecret";

describe("IconClassSecret", () => {
  it("matches snapshot", () => {
    const aIconClassSecret = shallow(<IconClassSecret />);
    expect(aIconClassSecret).toMatchSnapshot();
  });
});