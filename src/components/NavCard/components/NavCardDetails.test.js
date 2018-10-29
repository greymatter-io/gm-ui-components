import React from "react";
import { shallow } from "enzyme";
import NavCardDetails from "./NavCardDetails";

const theme = {
  OPACITY_15: "0.15",
  COLOR_BACKGROUND_B: "blue",
  COLOR_BACKGROUND_C: "red",
  FONT_SIZE_SM: "10px"
};

describe("NavCardDetails", () => {
  it("matches snapshot", () => {
    const aNavCardDetails = shallow(<NavCardDetails theme={theme} />);
    expect(aNavCardDetails).toMatchSnapshot();
  });
});
