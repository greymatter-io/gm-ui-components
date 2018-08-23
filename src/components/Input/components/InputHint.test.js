import React from "react";
import { shallow } from "enzyme";

import InputHint from "./InputHint";

describe("InputHint", () => {
  it("matches snapshot", () => {
    const aInputHint = shallow(<InputHint/>);
    expect(aInputHint).toMatchSnapshot();
  });
});
