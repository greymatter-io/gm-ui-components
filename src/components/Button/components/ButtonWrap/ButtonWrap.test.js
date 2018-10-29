import React from "react";
import { shallow } from "enzyme";
import ButtonWrap from "./ButtonWrap";

const theme = {
  COLOR_INTENT_DANGER: "red",
  COLOR_INTENT_INFO: "blue",
  COLOR_INTENT_WARNING: "yellow",
  COLOR_INTENT_HIGHLIGHT: "green",
  COLOR_BACKGROUND_A: "white",
  FONT_STACK_BASE: "sans-serif",
  FONT_WEIGHT_BASE: "500"
};

describe("ButtonWrap", () => {
  it("should match snapshot", () => {
    const aButtonWrap = shallow(<ButtonWrap theme={theme} />);
    expect(aButtonWrap).toMatchSnapshot();
  });
});
