import React from "react";
import { shallow } from "enzyme";

import IconClassUnclassified from "./IconClassUnclassified";

describe("IconClassUnclassified", () => {
  it("matches snapshot", () => {
    const aIconClassUnclassified = shallow(<IconClassUnclassified />);
    expect(aIconClassUnclassified).toMatchSnapshot();
  });
});