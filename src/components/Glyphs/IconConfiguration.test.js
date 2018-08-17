import React from "react";
import { shallow } from "enzyme";

import IconConfiguration from "./IconConfiguration";

describe("IconConfiguration", () => {
  it("matches snapshot", () => {
    const aIconConfiguration = shallow(<IconConfiguration />);
    expect(aIconConfiguration).toMatchSnapshot();
  });
});