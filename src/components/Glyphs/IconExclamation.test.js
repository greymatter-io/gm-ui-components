import React from "react";
import { shallow } from "enzyme";

import IconExclamation from "./IconExclamation";

describe("IconExclamation", () => {
  it("matches snapshot", () => {
    const aIconExclamation = shallow(<IconExclamation />);
    expect(aIconExclamation).toMatchSnapshot();
  });
});