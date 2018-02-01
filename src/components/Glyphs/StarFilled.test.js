import React from "react";
import { shallow } from "enzyme";
import StarFilled from "./StarFilled";

describe("StarFilled", () => {
  it("matches snapshot", () => {
    const aStarFilled = shallow(<StarFilled />);
    expect(aStarFilled).toMatchSnapshot();
  });
});
