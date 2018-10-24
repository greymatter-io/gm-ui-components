import React from "react";
import { shallow } from "enzyme";

import IconUnlock from "./IconUnlock.svg";

describe("IconUnlock", () => {
  it("matches snapshot", () => {
    const aIconUnlock = shallow(<IconUnlock />);
    expect(aIconUnlock).toMatchSnapshot();
  });
});