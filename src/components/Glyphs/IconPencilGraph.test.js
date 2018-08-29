import React from "react";
import { shallow } from "enzyme";

import IconPencilGraph from "./IconPencilGraph";

describe("IconPencilGraph", () => {
  it("matches snapshot", () => {
    const aIconPencilGraph = shallow(<IconPencilGraph />);
    expect(aIconPencilGraph).toMatchSnapshot();
  });
});