import React from "react";
import { shallow } from "enzyme";

import IconObjectBase from "./IconObjectBase.svg";

describe("IconObjectBase", () => {
  it("matches snapshot", () => {
    const aIconObjectBase = shallow(<IconObjectBase />).find("IconObjectBase.svg");
    expect(aIconObjectBase).toMatchSnapshot();
  });
});