import React from "react";
import { shallow } from "enzyme";

import IconPencilGraph from "./IconPencilGraph.svg";

describe("IconPencilGraph", () => {
  it("matches snapshot", () => {
    const aIconPencilGraph = shallow(<IconPencilGraph />).find("IconPencilGraph.svg");
    expect(aIconPencilGraph).toMatchSnapshot();
  });
});