import React from "react";
import { shallow } from "enzyme";

import IconOnOff from "./IconOnOff";

describe("IconOnOff", () => {
  it("matches snapshot", () => {
    const aIconOnOff = shallow(<IconOnOff />);
    expect(aIconOnOff).toMatchSnapshot();
  });
});