import React from "react";
import { shallow } from "enzyme";
import SectionIcon from "./SectionIcon";

describe("SectionIcon", () => {
  it("matches snapshot", () => {
    const aSectionIcon = shallow(<SectionIcon />);
    expect(aSectionIcon).toMatchSnapshot();
  });
});
