import React from "react";

import NavCardKey from "./NavCardKey";

describe("NavCardKey", () => {
  it("matches snapshot", () => {
    const aNavCardKey = shallow(<NavCardKey />);
    expect(aNavCardKey).toMatchSnapshot();
  });
});
