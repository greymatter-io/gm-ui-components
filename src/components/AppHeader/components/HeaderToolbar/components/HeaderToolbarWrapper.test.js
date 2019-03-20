import React from "react";
import { shallow } from "enzyme";
import HeaderToolbarWrapper from "./HeaderToolbarWrapper";

describe("HeaderToolbarWrapper", () => {
  it("matches snapshot", () => {
    const aHeaderToolbarWrapper = shallow(<HeaderToolbarWrapper />);
    expect(aHeaderToolbarWrapper).toMatchSnapshot();
  });
});
