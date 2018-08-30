import React from "react";
import { shallow } from "enzyme";

import IconTape from "./IconTape";

describe("IconTape", () => {
  it("matches snapshot", () => {
    const aIconTape = shallow(<IconTape />);
    expect(aIconTape).toMatchSnapshot();
  });
});