import React from "react";

import NavCardIcon from "./NavCardIcon";

describe("NavCardIcon", () => {
  it("matches snapshot", () => {
    const aNavCardIcon = shallow(<NavCardIcon />);
    expect(aNavCardIcon).toMatchSnapshot();
  });
});
