import React from "react";
import { shallow } from "enzyme";

import IconServices from "./IconServices";

describe("IconServices", () => {
  it("matches snapshot", () => {
    const aIconServices = shallow(<IconServices />);
    expect(aIconServices).toMatchSnapshot();
  });
});