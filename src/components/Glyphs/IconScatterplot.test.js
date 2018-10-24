import React from "react";
import { shallow } from "enzyme";
import IconScatterplot from "./IconScatterplot.svg";
describe("IconScatterplot", () => {
  it("matches snapshot", () => {
    
    const aIconScatterplot = shallow(<IconScatterplot />).find("IconScatterplot.svg").dive();
    console.log(aIconScatterplot.debug())
    expect(aIconScatterplot).toMatchSnapshot();
  });
});