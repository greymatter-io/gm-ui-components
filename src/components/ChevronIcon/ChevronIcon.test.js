import React from "react";
import { shallow } from "enzyme";
import ChevronIcon from "./ChevronIcon";

describe("ChevronIcon", () => {
  it("matches snapshot with no props", () => {
    const aChevronIcon = shallow(<ChevronIcon />);
    expect(aChevronIcon).toMatchSnapshot();
  });
});
