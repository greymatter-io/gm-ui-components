import React from "react";
import { shallow } from "enzyme";

import IconLinkedIn from "./IconLinkedIn";

describe("IconLinkedIn", () => {
  it("matches snapshot", () => {
    const aIconLinkedIn = shallow(<IconLinkedIn />);
    expect(aIconLinkedIn).toMatchSnapshot();
  });
});