import React from "react";
import { shallow } from "enzyme";
import Memory from "./Memory";

describe("Memory", () => {
  it("matches snapshot", () => {
    const aMemory = shallow(<Memory />);
    expect(aMemory).toMatchSnapshot();
  });
});
