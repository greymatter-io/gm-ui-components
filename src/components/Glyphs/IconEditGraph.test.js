import React from "react";
import { shallow } from "enzyme";

import IconEditGraph from "./IconEditGraph";

describe("IconEditGraph", () => {
  it("matches snapshot", () => {
    const aIconEditGraph = shallow(<IconEditGraph />);
    expect(aIconEditGraph).toMatchSnapshot();
  });
});