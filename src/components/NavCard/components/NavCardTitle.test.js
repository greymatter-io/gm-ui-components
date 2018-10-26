import React from "react";
import { shallow } from "enzyme";
import NavCardTitle from "./NavCardTitle";

const theme = {
  OPACITY_15: "0.15",
  RADIUS_05: "4px",
  COLOR_BACKGROUND_B: "blue",
  COLOR_BACKGROUND_C: "red",
  FONT_WEIGHT_SEMIBOLD: "500"
};

describe("NavCardTitle", () => {
  it("matches snapshot", () => {
    const aNavCardTitle = shallow(<NavCardTitle theme={theme} />);
    expect(aNavCardTitle).toMatchSnapshot();
  });
});
