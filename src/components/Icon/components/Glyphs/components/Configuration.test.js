import React from "react";
import { shallow } from "enzyme";
import Configuration from "./Configuration";

describe("Configuration", () => {
  it("matches snapshot", () => {
    const aConfiguration = shallow(<Configuration />);
    expect(aConfiguration).toMatchSnapshot();
  });
});
