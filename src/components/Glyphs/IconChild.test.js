import React from "react";
import { shallow } from "enzyme";

import IconChild from "./IconChild.svg";

describe("IconChild", () => {
  it("matches snapshot", () => {
    const aIconChild = shallow(<IconChild />).find("IconChild.svg");
    expect(aIconChild).toMatchSnapshot();
  });
});