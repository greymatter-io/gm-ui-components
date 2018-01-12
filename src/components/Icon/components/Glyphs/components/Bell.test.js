import React from "react";
import { shallow } from "enzyme";
import Bell from "./Bell";

describe("Bell", () => {
  it("matches snapshot", () => {
    const aBell = shallow(<Bell />);
    expect(aBell).toMatchSnapshot();
  });
});
