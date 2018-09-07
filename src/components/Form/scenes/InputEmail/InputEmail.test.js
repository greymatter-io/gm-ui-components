import React from "react";
import { shallow } from "enzyme";

import InputEmail from "./InputEmail";

describe("InputEmail", () => {
  it("matches snapshot", () => {
    const aInputEmail = shallow(
      <InputEmail label="Test" clickAction={() => {}} />
    );
    expect(aInputEmail).toMatchSnapshot();
  });
});
