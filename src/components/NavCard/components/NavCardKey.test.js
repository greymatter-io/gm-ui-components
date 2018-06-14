import React from "react";
import { shallow } from "enzyme";
import NavCardKey from "./NavCardKey";

describe("NavCardKey", () => {
  it("matches snapshot", () => {
    const aNavCardKey = shallow(<NavCardKey />);
    expect(aNavCardKey).toMatchSnapshot();
  });
});
