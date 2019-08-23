import React from "react";


import ToggleSwitch from "./ToggleSwitch";

describe("ToggleSwitch", () => {
  it("matches snapshot", () => {
    const aToggleSwitch = shallow(<ToggleSwitch />);
    expect(aToggleSwitch).toMatchSnapshot();
  });
});