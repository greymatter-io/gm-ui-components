import React from "react";
import { shallow } from "enzyme";
import StyledSVG from "./StyledSVG";

describe("StyledSVG", () => {
  it("matches snapshot", () => {
    const aStyledSVG = shallow(<StyledSVG />);
    expect(aStyledSVG).toMatchSnapshot();
  });
});
