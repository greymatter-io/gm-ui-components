import React from "react";
import { shallow } from "enzyme";

import IconUserGroup from "./IconUserGroup";

describe("IconUserGroup", () => {
  it("matches snapshot", () => {
    const aIconUserGroup = shallow(<IconUserGroup />);
    expect(aIconUserGroup).toMatchSnapshot();
  });
});