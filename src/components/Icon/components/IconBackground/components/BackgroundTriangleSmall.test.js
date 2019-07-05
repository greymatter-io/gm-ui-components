import React from "react";

import BackgroundTriangleSmall from "./BackgroundTriangleSmall";

describe("BackgroundTriangleSmall", () => {
  it("matches snapshot", () => {
    const aBackgroundTriangleSmall = shallow(<BackgroundTriangleSmall />);
    expect(aBackgroundTriangleSmall).toMatchSnapshot();
  });
});
