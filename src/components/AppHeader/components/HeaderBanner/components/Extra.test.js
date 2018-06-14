import React from "react";
import { shallow } from "enzyme";
import Extra from "./Extra";

describe("Extra", () => {
  it("matches snapshot", () => {
    const aExtra = shallow(<Extra />);
    expect(aExtra).toMatchSnapshot();
  });
});
