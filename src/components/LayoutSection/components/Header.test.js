import React from "react";

import Header from "./Header";

describe("Header", () => {
  it("matches snapshot", () => {
    const aHeader = shallow(<Header />);
    expect(aHeader).toMatchSnapshot();
  });
});
