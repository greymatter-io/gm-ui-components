import React from "react";
import { shallow } from "enzyme";
import Timer from "./Timer";

describe("Timer", () => {
  it("matches snapshot", () => {
    const aTimer = shallow(<Timer />);
    expect(aTimer).toMatchSnapshot();
  });
});
