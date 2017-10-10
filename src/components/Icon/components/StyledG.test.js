import React from "react";
import { shallow } from "enzyme";
import StyledG from "./StyledG";

describe("StyledG", () => {
  it("matches snapshot", () => {
    const aStyledG = shallow(<StyledG />);
    expect(aStyledG).toMatchSnapshot();
  });
});
