import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

const theme = {
  FONT_SIZE_TITLE: "12px",
  FONT_STACK_BRAND: "sans-serif",
  FONT_WEIGHT_BASE: "500",
  COLOR_BACKGROUND_C: "blue"
};

describe("Header", () => {
  it("matches snapshot", () => {
    const aHeader = shallow(<Header theme={theme} />);
    expect(aHeader).toMatchSnapshot();
  });
});
