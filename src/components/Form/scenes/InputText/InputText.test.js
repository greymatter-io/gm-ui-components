import React from "react";
import { shallow } from "enzyme";

import InputText from "./InputText";

describe("InputText", () => {
  it("matches snapshot", () => {
    const aInputText = shallow(
      <InputText label="Test" clickAction={() => {}} />
    );
    expect(aInputText).toMatchSnapshot();
  });
});
