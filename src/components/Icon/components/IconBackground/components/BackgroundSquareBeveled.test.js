import React from "react";
import { shallow } from "enzyme";
import BackgroundSquareBeveled from "./BackgroundSquareBeveled";

describe("BackgroundSquareBeveled", () => {
  it("matches snapshot", () => {
    const aBackgroundSquareBeveled = shallow(<BackgroundSquareBeveled />);
    expect(aBackgroundSquareBeveled).toMatchSnapshot();
  });
});
