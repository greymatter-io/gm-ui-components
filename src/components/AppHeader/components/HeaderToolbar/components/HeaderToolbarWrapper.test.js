import React from "react";
import { shallow } from "enzyme";
import HeaderToolbarWrapper from "./HeaderToolbarWrapper";

const theme = {
  FONT_SIZE_BASE: "12px",
  COLOR_BACKGROUND_C: "blue"
};

describe("HeaderToolbarWrapper", () => {
  it("matches snapshot", () => {
    const aHeaderToolbarWrapper = shallow(
      <HeaderToolbarWrapper theme={theme} />
    );
    expect(aHeaderToolbarWrapper).toMatchSnapshot();
  });
});
