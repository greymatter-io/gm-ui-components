import React from "react";
import { shallow } from "enzyme";

import IconDashboards from "./IconDashboards";

describe("IconDashboards", () => {
  it("matches snapshot", () => {
    const aIconDashboards = shallow(<IconDashboards />);
    expect(aIconDashboards).toMatchSnapshot();
  });
});