import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";

describe("Input", () => {
  it("matches snapshot", () => {
    const aInput = shallow(<Input label="Test" clickAction={() => {}} />);
    expect(aInput).toMatchSnapshot();
  });
});
