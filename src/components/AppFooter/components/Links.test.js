import React from "react";

import Links from "./Links";

describe("Link", () => {
  it("should match snapshot", () => {
    const aLinks = shallow(<Links />);
    expect(aLinks).toMatchSnapshot();
  });
});
