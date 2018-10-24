import React from "react";
import { shallow } from "enzyme";

import IconExclamation from "./IconExclamation.svg";

describe("IconExclamation", () => {
  it("matches snapshot", () => {
    const aIconExclamation = shallow(<IconExclamation />);
    expect(aIconExclamation).toMatchSnapshot();
  });
});