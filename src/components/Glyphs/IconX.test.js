import React from "react";
import { shallow } from "enzyme";

import IconX from "./IconX";

describe("IconX", () => {
  it("matches snapshot", () => {
    const aIconX = shallow(<IconX />);
    expect(aIconX).toMatchSnapshot();
  });
});