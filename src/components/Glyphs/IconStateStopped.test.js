import React from "react";
import { shallow } from "enzyme";

import IconStateStopped from "./IconStateStopped";

describe("IconStateStopped", () => {
  it("matches snapshot", () => {
    const aIconStateStopped = shallow(<IconStateStopped />);
    expect(aIconStateStopped).toMatchSnapshot();
  });
});