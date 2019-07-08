import React from "react";

import ButtonGroup from "./ButtonGroup";

describe("ButtonGroup", () => {
  it("should match snapshot", () => {
    const aButtonGroup = shallow(<ButtonGroup />);
    expect(aButtonGroup).toMatchSnapshot();
  });
});
