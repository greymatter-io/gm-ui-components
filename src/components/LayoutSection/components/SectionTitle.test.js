import React from "react";

import SectionTitle from "./SectionTitle";

describe("SectionTitle", () => {
  it("matches snapshot", () => {
    const aSectionTitle = shallow(<SectionTitle />);
    expect(aSectionTitle).toMatchSnapshot();
  });
});
