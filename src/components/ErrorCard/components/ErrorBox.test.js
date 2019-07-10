import React from "react";

import ErrorBox from "./ErrorBox";

describe("ErrorBox", () => {
  it("matches snapshot", () => {
    const aErrorBox = shallow(<ErrorBox />);
    expect(aErrorBox).toMatchSnapshot();
  });
});
