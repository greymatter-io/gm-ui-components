import React from "react";
import { shallow } from "enzyme";
import Threads from "./Threads";

describe("Threads", () => {
  it("matches snapshot", () => {
    const aThreads = shallow(<Threads />);
    expect(aThreads).toMatchSnapshot();
  });
});
