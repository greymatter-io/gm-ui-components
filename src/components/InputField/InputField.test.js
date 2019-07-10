import React from "react";

import InputField from "./InputField";

describe("InputField", () => {
  it("matches snapshot", () => {
    const aInputField = shallow(
      <InputField label="Test" type="text" clickAction={() => {}} />
    );
    expect(aInputField).toMatchSnapshot();
  });
});
