import React from "react";
import { shallow } from "enzyme";
import Power from "./Power";

describe("Power", () => {
  it("matches snapshot", () => {
    const aPower = shallow(<Power />);
    expect(aPower).toMatchSnapshot();
  });
});
