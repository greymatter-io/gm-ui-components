import React from "react";
import { shallow } from "enzyme";

import RadioBox from "./RadioBox";

describe("RadioBox", () => {
  it("should render", () => {
    const aRadioBox = shallow(<RadioBox />);
    expect(aRadioBox).toMatchSnapshot();
  });
});
