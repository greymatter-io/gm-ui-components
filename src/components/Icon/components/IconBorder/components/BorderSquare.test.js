import React from "react";
import { shallow } from "enzyme";
import BorderSquare from "./BorderSquare";

describe("BorderSquare", () => {
  it("matches snapshot", () => {
    const aBorderSquare = shallow(<BorderSquare />);
    expect(aBorderSquare).toMatchSnapshot();
  });
});
