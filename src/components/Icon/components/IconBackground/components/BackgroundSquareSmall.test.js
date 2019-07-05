import React from "react";

import BackgroundSquareSmall from "./BackgroundSquareSmall";

describe("BackgroundSquareSmall", () => {
  it("matches snapshot", () => {
    const aBackgroundSquareSmall = shallow(<BackgroundSquareSmall />);
    expect(aBackgroundSquareSmall).toMatchSnapshot();
  });
});
