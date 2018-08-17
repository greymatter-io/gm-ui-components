import React from "react";
import { shallow } from "enzyme";

import IconPower from "./IconPower";

describe("IconPower", () => {
  it("matches snapshot", () => {
    const aIconPower = shallow(<IconPower />);
    expect(aIconPower).toMatchSnapshot();
  });
});