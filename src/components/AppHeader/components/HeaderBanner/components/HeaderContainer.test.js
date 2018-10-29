import React from "react";
import { shallow } from "enzyme";
import HeaderContainer from "./HeaderContainer";

const theme = {
  COLOR_BACKGROUND_C: "blue"
};

describe("HeaderContainer", () => {
  it("matches snapshot", () => {
    const aHeaderContainer = shallow(<HeaderContainer theme={theme} />);
    expect(aHeaderContainer).toMatchSnapshot();
  });
});
