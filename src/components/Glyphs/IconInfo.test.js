import React from "react";
import { shallow } from "enzyme";

import IconInfo from "./IconInfo";

describe("IconInfo", () => {
  it("matches snapshot", () => {
    const aIconInfo = shallow(<IconInfo />);
    expect(aIconInfo).toMatchSnapshot();
  });
});