import React from "react";
import { shallow } from "enzyme";

import IconThreads from "./IconThreads.svg";

describe("IconThreads", () => {
  it("matches snapshot", () => {
    const aIconThreads = shallow(<IconThreads />);
    expect(aIconThreads).toMatchSnapshot();
  });
});