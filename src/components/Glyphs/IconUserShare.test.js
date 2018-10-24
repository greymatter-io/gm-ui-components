import React from "react";
import { shallow } from "enzyme";

import IconUserShare from "./IconUserShare.svg";

describe("IconUserShare", () => {
  it("matches snapshot", () => {
    const aIconUserShare = shallow(<IconUserShare />).find("IconUserShare.svg");
    expect(aIconUserShare).toMatchSnapshot();
  });
});