import React from "react";

import BackgroundSquareBeveled from "./BackgroundSquareBeveled";

describe("BackgroundSquareBeveled", () => {
  it("matches snapshot", () => {
    const aBackgroundSquareBeveled = shallow(<BackgroundSquareBeveled />);
    expect(aBackgroundSquareBeveled).toMatchSnapshot();
  });
});
