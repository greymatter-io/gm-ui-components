import React from "react";
import { shallow } from "enzyme";
import IconExplorer from "./IconExplorer.svg";
describe("IconExplorer", () => {
  it("matches snapshot", () => {
    
    const aIconExplorer = shallow(<IconExplorer />).find("IconExplorer.svg").dive();
    console.log(aIconExplorer.debug())
    expect(aIconExplorer).toMatchSnapshot();
  });
});