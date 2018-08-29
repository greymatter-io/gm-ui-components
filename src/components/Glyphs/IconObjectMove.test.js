import React from "react";
import { shallow } from "enzyme";

import IconObjectMove from "./IconObjectMove";

describe("IconObjectMove", () => {
  it("matches snapshot", () => {
    const aIconObjectMove = shallow(<IconObjectMove />);
    expect(aIconObjectMove).toMatchSnapshot();
  });
});