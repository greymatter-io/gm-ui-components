import React from "react";

import NavCardTitle from "./NavCardTitle";

describe("NavCardTitle", () => {
  it("matches snapshot", () => {
    const aNavCardTitle = shallow(<NavCardTitle />);
    expect(aNavCardTitle).toMatchSnapshot();
  });
});
