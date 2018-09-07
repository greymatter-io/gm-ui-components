import React from "react";
import { shallow } from "enzyme";

import InputTelephone from "./InputTelephone";

describe("InputTelephone", () => {
  it("matches snapshot", () => {
    const aInputTelephone = shallow(
      <InputTelephone label="Test" clickAction={() => {}} />
    );
    expect(aInputTelephone).toMatchSnapshot();
  });
});
