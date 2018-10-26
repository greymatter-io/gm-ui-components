import React from "react";
import { shallow } from "enzyme";
import NavCardWrapper from "./NavCardWrapper";

const theme = {
  OPACITY_15: "0.15",
  RADIUS_05: "4px",
  COLOR_BACKGROUND_B: "blue",
  COLOR_BACKGROUND_C: "red",
  COLOR_INTENT_HIGHLIGHT: "green",
  FONT_WEIGHT_REGULAR: "500",
  FONT_STACK_BASE: "sans-serif"
};

describe("NavCardWrapper", () => {
  it("matches snapshot", () => {
    const aNavCardWrapper = shallow(<NavCardWrapper theme={theme} />);
    expect(aNavCardWrapper).toMatchSnapshot();
  });
});
