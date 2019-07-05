import React from "react";

import SectionContent from "./SectionContent";

describe("SectionContent", () => {
  it("matches snapshot", () => {
    const aSectionContent = shallow(<SectionContent />);
    expect(aSectionContent).toMatchSnapshot();
  });
});
