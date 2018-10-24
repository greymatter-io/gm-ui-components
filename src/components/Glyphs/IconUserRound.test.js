import React from "react";
import { shallow } from "enzyme";

import IconUserRound from "./IconUserRound.svg";

describe("IconUserRound", () => {
  it("matches snapshot", () => {
    const aIconUserRound = shallow(<IconUserRound />);
    expect(aIconUserRound).toMatchSnapshot();
  });
});