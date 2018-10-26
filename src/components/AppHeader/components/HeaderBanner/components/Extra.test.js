import React from "react";
import { shallow } from "enzyme";
import Extra from "./Extra";

const theme = {
  OPACITY_15: "0.15",
  OPACITY_50: "0.5",
  FONT_SIZE_SM: "10px",
  FONT_STACK_BASE: "sans-serif",
  COLOR_BACKGROUND_A: "blue",
  COLOR_BACKGROUND_B: "red",
  COLOR_BACKGROUND_C: "green",
  RADIUS_05: "4px",
  FONT_WEIGHT_SEMIBOLD: "500"
};

describe("Extra", () => {
  it("matches snapshot", () => {
    const aExtra = shallow(<Extra theme={theme} />);
    expect(aExtra).toMatchSnapshot();
  });
});
