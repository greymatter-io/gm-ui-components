import React from "react";
import { shallow } from "enzyme";

import IconChild from "./IconChild";

describe("IconChild", () => {
  it("matches snapshot", () => {
    const aIconChild = shallow(<IconChild />);
    expect(aIconChild).toMatchSnapshot();
  });
});