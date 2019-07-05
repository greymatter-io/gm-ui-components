import React from "react";

import RadioBox from "./RadioBox";

describe("RadioBox", () => {
  it("should render", () => {
    const aRadioBox = shallow(<RadioBox />);
    expect(aRadioBox).toMatchSnapshot();
  });
});
