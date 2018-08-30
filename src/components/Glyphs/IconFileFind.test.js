import React from "react";
import { shallow } from "enzyme";

import IconFileFind from "./IconFileFind";

describe("IconFileFind", () => {
  it("matches snapshot", () => {
    const aIconFileFind = shallow(<IconFileFind />);
    expect(aIconFileFind).toMatchSnapshot();
  });
});