import React from "react";

import BackgroundTriangle from "./BackgroundTriangle";

describe("BackgroundTriangle", () => {
  it("matches snapshot", () => {
    const aBackgroundTriangle = shallow(<BackgroundTriangle />);
    expect(aBackgroundTriangle).toMatchSnapshot();
  });
});
