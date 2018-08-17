import React from "react";
import { shallow } from "enzyme";

import IconEntity from "./IconEntity";

describe("IconEntity", () => {
  it("matches snapshot", () => {
    const aIconEntity = shallow(<IconEntity />);
    expect(aIconEntity).toMatchSnapshot();
  });
});