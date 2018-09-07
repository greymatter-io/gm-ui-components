import React from "react";
import { shallow } from "enzyme";

import InputNumber from "./InputNumber";

describe("InputNumber", () => {
  it("matches snapshot", () => {
    const aInputNumber = shallow(
      <InputNumber label="Test" clickAction={() => {}} />
    );
    expect(aInputNumber).toMatchSnapshot();
  });
});
