import React from "react";
import { shallow } from "enzyme";

import ButtonGroup from "./ButtonGroup";

describe("ButtonGroup", () => {
  it("should match snapshot", () => {
    const aButtonGroup = shallow(<ButtonGroup />);
    expect(aButtonGroup).toMatchSnapshot();
  });
});
