import React from "react";
import { shallow } from "enzyme";
import BorderSquareSmall from "./BorderSquareSmall";

describe("BorderSquareSmall", () => {
  it("matches snapshot", () => {
    const aBorderSquareSmall = shallow(<BorderSquareSmall />);
    expect(aBorderSquareSmall).toMatchSnapshot();
  });
});
