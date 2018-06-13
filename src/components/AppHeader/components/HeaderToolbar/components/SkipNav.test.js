import React from "react";
import { shallow } from "enzyme";
import SkipNav from "./SkipNav";

describe("SkipNav", () => {
  it("matches snapshot", () => {
    const aSkipNav = shallow(<SkipNav />);
    expect(aSkipNav).toMatchSnapshot();
  });
});
