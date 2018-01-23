import React from "react";
import { shallow } from "enzyme";
import BorderCircleSmall from "./BorderCircleSmall";

describe("BorderCircleSmall", () => {
  it("matches snapshot", () => {
    const aBorderCircleSmall = shallow(<BorderCircleSmall />);
    expect(aBorderCircleSmall).toMatchSnapshot();
  });
});
