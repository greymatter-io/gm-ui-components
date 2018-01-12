import React from "react";
import { shallow } from "enzyme";
import Scale from "./Scale";

describe("Scale", () => {
  it("matches snapshot", () => {
    const aScale = shallow(<Scale />);
    expect(aScale).toMatchSnapshot();
  });
});
