import React from "react";
import { shallow } from "enzyme";
import BackgroundSquare from "./BackgroundSquare";

describe("BackgroundSquare", () => {
  it("matches snapshot", () => {
    const aBackgroundSquare = shallow(<BackgroundSquare />);
    expect(aBackgroundSquare).toMatchSnapshot();
  });
});
