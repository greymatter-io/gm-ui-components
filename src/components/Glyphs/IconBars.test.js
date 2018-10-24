import React from "react";
import { shallow } from "enzyme";

import IconBars from "./IconBars.svg";

describe("IconBars", () => {
  it("matches snapshot", () => {
    const aIconBars = shallow(<IconBars />);
    expect(aIconBars).toMatchSnapshot();
  });
});