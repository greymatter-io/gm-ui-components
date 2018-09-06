import React from "react";
import { shallow } from "enzyme";

import Box from "./Box";

describe("Box", () => {
  it("should render", () => {
    const aBox = shallow(<Box />);
    expect(aBox).toMatchSnapshot();
  });
});
