import React from "react";

import ReadoutItemGraph from "./ReadoutItemGraph";

describe("ReadoutItemGraph", () => {
  it("matches snapshot", () => {
    const aReadoutItemGraph = shallow(<ReadoutItemGraph />);
    expect(aReadoutItemGraph).toMatchSnapshot();
  });
});
