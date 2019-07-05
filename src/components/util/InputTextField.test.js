import React from "react";

import InputTextField from "./InputTextField";

describe("InputTextField", () => {
  it("matches snapshot", () => {
    const aInputTextField = shallow(<InputTextField />);
    expect(aInputTextField).toMatchSnapshot();
  });
});
