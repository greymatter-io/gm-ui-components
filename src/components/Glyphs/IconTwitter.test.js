import React from "react";
import { shallow } from "enzyme";

import IconTwitter from "./IconTwitter.svg";

describe("IconTwitter", () => {
  it("matches snapshot", () => {
    const aIconTwitter = shallow(<IconTwitter />).find("IconTwitter.svg");
    expect(aIconTwitter).toMatchSnapshot();
  });
});