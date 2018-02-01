import React from "react";
import { shallow } from "enzyme";
import HttpPatch from "./HttpPatch";

describe("HttpPatch", () => {
  it("matches snapshot", () => {
    const aHttpPatch = shallow(<HttpPatch />);
    expect(aHttpPatch).toMatchSnapshot();
  });
});
