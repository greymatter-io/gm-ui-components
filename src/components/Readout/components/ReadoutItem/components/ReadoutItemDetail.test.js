import React from "react";

import ReadoutItemDetail from "./ReadoutItemDetail";

describe("ReadoutItemDetail", () => {
  it("matches snapshot", () => {
    const aReadoutItemDetail = shallow(<ReadoutItemDetail />);
    expect(aReadoutItemDetail).toMatchSnapshot();
  });
});
