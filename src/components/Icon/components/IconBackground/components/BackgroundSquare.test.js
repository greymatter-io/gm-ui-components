import React from "react";

import BackgroundSquare from "./BackgroundSquare";

describe("BackgroundSquare", () => {
  it("matches snapshot", () => {
    const aBackgroundSquare = shallow(<BackgroundSquare />);
    expect(aBackgroundSquare).toMatchSnapshot();
  });
});
