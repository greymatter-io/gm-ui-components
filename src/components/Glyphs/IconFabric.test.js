import React from "react";
import { shallow } from "enzyme";

import IconFabric from "./IconFabric";

describe("IconFabric", () => {
  it("matches snapshot", () => {
    const aIconFabric = shallow(<IconFabric />);
    expect(aIconFabric).toMatchSnapshot();
  });
});