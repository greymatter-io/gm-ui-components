import React from "react";
import { shallow } from "enzyme";
import NavCardKey from "./NavCardKey";

const theme = {
  OPACITY_15: "0.15",
  OPACITY_70: "0.7",
  COLOR_BACKGROUND_B: "blue",
  COLOR_BACKGROUND_C: "red"
};

describe("NavCardKey", () => {
  it("matches snapshot", () => {
    const aNavCardKey = shallow(<NavCardKey theme={theme} />);
    expect(aNavCardKey).toMatchSnapshot();
  });
});
