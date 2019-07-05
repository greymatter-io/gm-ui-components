import React from "react";

import BackgroundSquareRounded from "./BackgroundSquareRounded";

describe("BackgroundSquareRounded", () => {
  it("matches snapshot", () => {
    const aBackgroundSquareRounded = shallow(<BackgroundSquareRounded />);
    expect(aBackgroundSquareRounded).toMatchSnapshot();
  });
});
