import React from "react";
import { shallow } from "enzyme";

import IconPower from "./IconPower.svg";

describe("IconPower", () => {
  it("matches snapshot", () => {
    const aIconPower = shallow(<IconPower />).find("IconPower.svg");
    expect(aIconPower).toMatchSnapshot();
  });
});