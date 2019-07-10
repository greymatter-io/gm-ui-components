import React from "react";

import ReadoutGroup from "./ReadoutGroup";

describe("ReadoutGroup", () => {
  it("matches snapshot", () => {
    const aReadoutGroup = shallow(<ReadoutGroup />);
    expect(aReadoutGroup).toMatchSnapshot();
  });
});
