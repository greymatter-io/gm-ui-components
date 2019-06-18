import React from "react";
import { shallow } from "enzyme";

import Collapse from "./Collapse";

describe("Collapse", () => {
  it("matches snapshot", () => {
    const aCollapse = shallow(
      <Collapse title="Collapse title"> Collapse children</Collapse>
    );
    expect(aCollapse).toMatchSnapshot();
  });
});
