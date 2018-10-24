import React from "react";
import { shallow } from "enzyme";

import IconFileText from "./IconFileText.svg";

describe("IconFileText", () => {
  it("matches snapshot", () => {
    const aIconFileText = shallow(<IconFileText />);
    expect(aIconFileText).toMatchSnapshot();
  });
});