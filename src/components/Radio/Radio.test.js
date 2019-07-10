import React from "react";

import Radio from "./Radio";

describe("Radio", () => {
  it("should render", () => {
    const aRadio = shallow(<Radio label="label" />);
    expect(aRadio).toMatchSnapshot();
  });
});
