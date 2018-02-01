import React from "react";
import { shallow } from "enzyme";
import Poll from "./Poll";

describe("Poll", () => {
  it("matches snapshot", () => {
    const aPoll = shallow(<Poll />);
    expect(aPoll).toMatchSnapshot();
  });
});
