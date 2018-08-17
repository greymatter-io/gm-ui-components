import React from "react";
import { shallow } from "enzyme";

import IconPlusXSmall from "./IconPlusXSmall";

describe("IconPlusXSmall", () => {
  it("matches snapshot", () => {
    const aIconPlusXSmall = shallow(<IconPlusXSmall />);
    expect(aIconPlusXSmall).toMatchSnapshot();
  });
});