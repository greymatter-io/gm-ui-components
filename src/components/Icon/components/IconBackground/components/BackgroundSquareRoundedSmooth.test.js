import React from "react";

import BackgroundSquareRoundedSmooth from "./BackgroundSquareRoundedSmooth";

describe("BackgroundSquareRoundedSmooth", () => {
  it("matches snapshot", () => {
    const aBackgroundSquareRoundedSmooth = shallow(
      <BackgroundSquareRoundedSmooth />
    );
    expect(aBackgroundSquareRoundedSmooth).toMatchSnapshot();
  });
});
