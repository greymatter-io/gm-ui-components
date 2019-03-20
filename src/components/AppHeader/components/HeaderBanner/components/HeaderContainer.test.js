import React from "react";
import { shallow } from "enzyme";
import HeaderContainer from "./HeaderContainer";

describe("HeaderContainer", () => {
  it("matches snapshot", () => {
    const aHeaderContainer = shallow(<HeaderContainer />);
    expect(aHeaderContainer).toMatchSnapshot();
  });
});
