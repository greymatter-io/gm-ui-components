import React from "react";
import { shallow } from "enzyme";

import Collapse from "./Collapse";

describe("Collapse", () => {
  it("matches snapshot", () => {
    const aCollapse = shallow(
      <Collapse title="Collapse title">
        <div>Collapse children</div>
      </Collapse>
    ).dive();
    expect(aCollapse).toMatchSnapshot();
  });
});
