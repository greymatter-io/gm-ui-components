import React from "react";
import { shallow } from "enzyme";

import IconFinagle from "./IconFinagle.svg";

describe("IconFinagle", () => {
  it("matches snapshot", () => {
    const aIconFinagle = shallow(<IconFinagle />);
    expect(aIconFinagle).toMatchSnapshot();
  });
});