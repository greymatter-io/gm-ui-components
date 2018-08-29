import React from "react";
import { shallow } from "enzyme";

import IconUserShare from "./IconUserShare";

describe("IconUserShare", () => {
  it("matches snapshot", () => {
    const aIconUserShare = shallow(<IconUserShare />);
    expect(aIconUserShare).toMatchSnapshot();
  });
});