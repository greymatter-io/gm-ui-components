import React from "react";
import { shallow } from "enzyme";
import Explorer from "./Explorer";

describe("Explorer", () => {
  it("matches snapshot", () => {
    const aExplorer = shallow(<Explorer />);
    expect(aExplorer).toMatchSnapshot();
  });
});
