import React from "react";
import { shallow } from "enzyme";

import IconHTTP from "./IconHTTP";

describe("IconHTTP", () => {
  it("matches snapshot", () => {
    const aIconHTTP = shallow(<IconHTTP />);
    expect(aIconHTTP).toMatchSnapshot();
  });
});