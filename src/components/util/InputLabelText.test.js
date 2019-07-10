import React from "react";

import InputLabelText from "./InputLabelText";

describe("InputLabel", () => {
  it("matches snapshot", () => {
    const aInputLabelText = shallow(<InputLabelText />);
    expect(aInputLabelText).toMatchSnapshot();
  });
});
