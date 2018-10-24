import React from "react";
import { shallow } from "enzyme";

import IconInfo from "./IconInfo.svg";

describe("IconInfo", () => {
  it("matches snapshot", () => {
    const aIconInfo = shallow(<IconInfo />);
    expect(aIconInfo).toMatchSnapshot();
  });
});