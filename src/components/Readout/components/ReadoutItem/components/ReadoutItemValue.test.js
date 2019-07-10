import React from "react";

import ReadoutItemValue from "./ReadoutItemValue";

describe("ReadoutItemValue", () => {
  it("matches snapshot", () => {
    const aReadoutItemValue = shallow(<ReadoutItemValue />);
    expect(aReadoutItemValue).toMatchSnapshot();
  });
});
