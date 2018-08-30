import React from "react";
import { shallow } from "enzyme";

import InputLabel from "./InputLabel";

describe("InputHint", () => {
  it("matches snapshot", () => {
    const aInputLabel = shallow(<InputLabel/>);
    expect(aInputLabel).toMatchSnapshot();
  });
});
