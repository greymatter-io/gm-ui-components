import React from "react";
import { shallow } from "enzyme";

import IconStateWarning from "./IconStateWarning";

describe("IconStateWarning", () => {
  it("matches snapshot", () => {
    const aIconStateWarning = shallow(<IconStateWarning />);
    expect(aIconStateWarning).toMatchSnapshot();
  });
});