import React from "react";

import ReadoutItemTitle from "./ReadoutItemTitle";

describe("ReadoutItemTitle", () => {
  it("matches snapshot", () => {
    const aReadoutItemTitle = shallow(<ReadoutItemTitle />);
    expect(aReadoutItemTitle).toMatchSnapshot();
  });
});
