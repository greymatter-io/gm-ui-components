import React from "react";
import { shallow } from "enzyme";

import IconX from "./IconX.svg";

describe("IconX", () => {
  it("matches snapshot", () => {
    const aIconX = shallow(<IconX />);
    expect(aIconX).toMatchSnapshot();
  });
});