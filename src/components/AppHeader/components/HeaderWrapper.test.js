import React from "react";
import { shallow } from "enzyme";
import HeaderWrapper from "./HeaderWrapper";

const theme = {
  FONT_STACK_BASE: "sans-serif",
  COLOR_CONTENT: "blue",
  COLOR_BACKGROUND_C: "red"
};

describe("HeaderWrapper", () => {
  it("matches snapshot", () => {
    const aHeaderWrapper = shallow(<HeaderWrapper theme={theme} />);
    expect(aHeaderWrapper).toMatchSnapshot();
  });
});
