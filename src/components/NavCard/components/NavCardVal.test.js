import React from "react";

import NavCardVal from "./NavCardVal";

describe("NavCardVal", () => {
  it("matches snapshot", () => {
    const aNavCardVal = shallow(<NavCardVal />);
    expect(aNavCardVal).toMatchSnapshot();
  });
});
