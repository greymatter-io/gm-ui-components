import React from "react";
import { shallow } from "enzyme";

import IconIdle from "./IconIdle";

describe("IconIdle", () => {
  it("matches snapshot", () => {
    const aIconIdle = shallow(<IconIdle />);
    expect(aIconIdle).toMatchSnapshot();
  });
});