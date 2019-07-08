import React from "react";

import Span from "./Span";

describe("Span", () => {
  it("matches snapshot", () => {
    const aSpan = shallow(<Span />);
    expect(aSpan).toMatchSnapshot();
  });
});
