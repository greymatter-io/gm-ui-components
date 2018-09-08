import React from "react";
import { shallow } from "enzyme";

import InputField from "./InputField";

describe("InputField", () => {
  it("matches snapshot", () => {
    const aInputField = shallow(<InputField />);
    expect(aInputField).toMatchSnapshot();
  });
});
