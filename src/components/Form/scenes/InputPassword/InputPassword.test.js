import React from "react";
import { shallow } from "enzyme";

import InputPassword from "./InputPassword";

describe("InputPassword", () => {
  it("matches snapshot", () => {
    const aInputPassword = shallow(
      <InputPassword label="Test" clickAction={() => {}} />
    );
    expect(aInputPassword).toMatchSnapshot();
  });
});
