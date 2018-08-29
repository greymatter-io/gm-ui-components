import React from "react";
import { shallow } from "enzyme";

import IconObjectBase from "./IconObjectBase";

describe("IconObjectBase", () => {
  it("matches snapshot", () => {
    const aIconObjectBase = shallow(<IconObjectBase />);
    expect(aIconObjectBase).toMatchSnapshot();
  });
});