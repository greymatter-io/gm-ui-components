import React from "react";
import { shallow } from "enzyme";
import JVM from "./JVM";

describe("JVM", () => {
  it("matches snapshot", () => {
    const aJVM = shallow(<JVM />);
    expect(aJVM).toMatchSnapshot();
  });
});
