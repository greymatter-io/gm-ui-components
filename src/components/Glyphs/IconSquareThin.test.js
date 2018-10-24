import React from "react";
import { shallow } from "enzyme";

import IconSquareThin from "./IconSquareThin.svg";

describe("IconSquareThin", () => {
  it("matches snapshot", () => {
    const aIconSquareThin = shallow(<IconSquareThin />);
    expect(aIconSquareThin).toMatchSnapshot();
  });
});