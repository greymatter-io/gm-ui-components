import React from "react";
import { shallow } from "enzyme";
import Scatterplot from "./Scatterplot";

describe("Scatterplot", () => {
  it("matches snapshot", () => {
    const aScatterplot = shallow(<Scatterplot />);
    expect(aScatterplot).toMatchSnapshot();
  });
});
