import React from "react";
import { shallow } from "enzyme";
import HeaderWrapper from "./HeaderWrapper";

describe("HeaderWrapper", () => {
  it("matches snapshot", () => {
    const aHeaderWrapper = shallow(<HeaderWrapper />);
    expect(aHeaderWrapper).toMatchSnapshot();
  });
});
