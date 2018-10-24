import React from "react";
import { shallow } from "enzyme";

import IconClassConfidential from "./IconClassConfidential.svg";

describe("IconClassConfidential", () => {
  it("matches snapshot", () => {
    const aIconClassConfidential = shallow(<IconClassConfidential />);
    expect(aIconClassConfidential).toMatchSnapshot();
  });
});