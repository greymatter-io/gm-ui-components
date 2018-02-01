import React from "react";
import { shallow } from "enzyme";
import Pause from "./Pause";

describe("Pause", () => {
  it("matches snapshot", () => {
    const aPause = shallow(<Pause />);
    expect(aPause).toMatchSnapshot();
  });
});
