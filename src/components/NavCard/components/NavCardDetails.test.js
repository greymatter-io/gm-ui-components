import React from "react";

import NavCardDetails from "./NavCardDetails";

describe("NavCardDetails", () => {
  it("matches snapshot", () => {
    const aNavCardDetails = shallow(<NavCardDetails />);
    expect(aNavCardDetails).toMatchSnapshot();
  });
});
