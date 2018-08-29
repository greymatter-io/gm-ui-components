import React from "react";
import { shallow } from "enzyme";

import IconCloud from "./IconCloud";

describe("IconCloud", () => {
  it("matches snapshot", () => {
    const aIconCloud = shallow(<IconCloud />);
    expect(aIconCloud).toMatchSnapshot();
  });
});