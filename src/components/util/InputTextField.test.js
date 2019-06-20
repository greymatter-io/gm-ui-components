import React from "react";
import { shallow } from "enzyme";

import InputTextField from "./InputTextField";

describe("InputTextField", () => {
  it("matches snapshot", () => {
    const aInputTextField = shallow(<InputTextField />);
    expect(aInputTextField).toMatchSnapshot();
  });
});
