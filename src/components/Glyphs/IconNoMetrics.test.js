import React from "react";
import { shallow } from "enzyme";
import IconNoMetrics from "./IconNoMetrics.svg";
describe("IconNoMetrics", () => {
  it("matches snapshot", () => {
    
    const aIconNoMetrics = shallow(<IconNoMetrics />).find("IconNoMetrics.svg").dive();
    console.log(aIconNoMetrics.debug())
    expect(aIconNoMetrics).toMatchSnapshot();
  });
});