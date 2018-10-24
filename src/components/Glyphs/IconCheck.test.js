import React from "react";
import { shallow } from "enzyme";

import IconCheck from "./IconCheck.svg";

describe("IconCheck", () => {
  it("matches snapshot", () => {
    const aIconCheck = shallow(<IconCheck />).find("IconCheck.svg");
    expect(aIconCheck).toMatchSnapshot();
  });
});