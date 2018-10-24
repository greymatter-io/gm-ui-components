import React from "react";
import { shallow } from "enzyme";
import IconEditGraph from "./IconEditGraph.svg";
describe("IconEditGraph", () => {
  it("matches snapshot", () => {
    
    const aIconEditGraph = shallow(<IconEditGraph />).find("IconEditGraph.svg").dive();
    console.log(aIconEditGraph.debug())
    expect(aIconEditGraph).toMatchSnapshot();
  });
});