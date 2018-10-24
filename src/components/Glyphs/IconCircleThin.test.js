import React from "react";
import { shallow } from "enzyme";

import IconCircleThin from "./IconCircleThin.svg";

describe("IconCircleThin", () => {
  it("matches snapshot", () => {
    const aIconCircleThin = shallow(<IconCircleThin />).find("IconCircleThin.svg");
    expect(aIconCircleThin).toMatchSnapshot();
  });
});