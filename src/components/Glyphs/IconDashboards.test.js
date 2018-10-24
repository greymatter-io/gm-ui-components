import React from "react";
import { shallow } from "enzyme";
import IconDashboards from "./IconDashboards.svg";
describe("IconDashboards", () => {
  it("matches snapshot", () => {
    
    const aIconDashboards = shallow(<IconDashboards />).find("IconDashboards.svg").dive();
    console.log(aIconDashboards.debug())
    expect(aIconDashboards).toMatchSnapshot();
  });
});