import React from "react";
import { shallow } from "enzyme";

import IconSquareThick from "./IconSquareThick.svg";

describe("IconSquareThick", () => {
  it("matches snapshot", () => {
    const aIconSquareThick = shallow(<IconSquareThick />);
    expect(aIconSquareThick).toMatchSnapshot();
  });
});