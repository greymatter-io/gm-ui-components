import React from "react";
import { shallow } from "enzyme";

import IconClassUnclassified from "./IconClassUnclassified.svg";

describe("IconClassUnclassified", () => {
  it("matches snapshot", () => {
    const aIconClassUnclassified = shallow(<IconClassUnclassified />);
    expect(aIconClassUnclassified).toMatchSnapshot();
  });
});