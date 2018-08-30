import React from "react";
import { shallow } from "enzyme";

import IconLinkOut from "./IconLinkOut";

describe("IconLinkOut", () => {
  it("matches snapshot", () => {
    const aIconLinkOut = shallow(<IconLinkOut />);
    expect(aIconLinkOut).toMatchSnapshot();
  });
});