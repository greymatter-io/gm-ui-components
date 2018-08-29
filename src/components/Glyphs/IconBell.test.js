import React from "react";
import { shallow } from "enzyme";

import IconBell from "./IconBell";

describe("IconBell", () => {
  it("matches snapshot", () => {
    const aIconBell = shallow(<IconBell />);
    expect(aIconBell).toMatchSnapshot();
  });
});