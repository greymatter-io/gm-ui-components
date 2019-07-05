import React from "react";

import NavCardVal from "./NavCardVal";
import { keen } from "style/theme";

describe("NavCardVal", () => {
  it("matches snapshot", () => {
    const aNavCardVal = shallow(<NavCardVal />);
    expect(aNavCardVal).toMatchSnapshot();
  });
});
