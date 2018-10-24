import React from "react";
import { shallow } from "enzyme";

import IconLinkOut from "./IconLinkOut.svg";

describe("IconLinkOut", () => {
  it("matches snapshot", () => {
    const aIconLinkOut = shallow(<IconLinkOut />).find("IconLinkOut.svg");
    expect(aIconLinkOut).toMatchSnapshot();
  });
});