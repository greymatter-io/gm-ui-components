import React from "react";

import InputTextField from "./InputTextField";

describe("InputTextField", () => {
  it("matches snapshot", () => {
    const aInputTextField = shallow(<InputTextField />);
    expect(aInputTextField).toMatchSnapshot();
  });
  it("displays danger color on invalid", () => {
    const aInputTextField = shallow(<InputTextField invalid={true} />);
    expect(aInputTextField).toMatchSnapshot();
  })
  it("displays success color on valid", () => {
    const aInputTextField = shallow(<InputTextField valid={true} />);
    expect(aInputTextField).toMatchSnapshot();
  })
});
