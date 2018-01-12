import React from "react";
import { shallow } from "enzyme";
import Cog from "./Cog";

describe("Cog", () => {
  it("matches snapshot", () => {
    const aCog = shallow(<Cog />);
    expect(aCog).toMatchSnapshot();
  });
});
