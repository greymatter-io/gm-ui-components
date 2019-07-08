import React from "react";

import ButtonWrap from "./ButtonWrap";

describe("ButtonWrap", () => {
  it("should match snapshot", () => {
    const aButtonWrap = shallow(<ButtonWrap />);
    expect(aButtonWrap).toMatchSnapshot();
  });
});
