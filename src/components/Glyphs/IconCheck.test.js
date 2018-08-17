import React from "react";
import { shallow } from "enzyme";

import IconCheck from "./IconCheck";

describe("IconCheck", () => {
  it("matches snapshot", () => {
    const aIconCheck = shallow(<IconCheck />);
    expect(aIconCheck).toMatchSnapshot();
  });
});