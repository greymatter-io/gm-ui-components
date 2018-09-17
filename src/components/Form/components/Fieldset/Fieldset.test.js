import React from "react";
import { shallow } from "enzyme";

import Fieldset from "./Fieldset";

describe("Fieldset", () => {
  it("matches snapshot", () => {
    const aFieldset = shallow(<Fieldset name="test" />);
    expect(aFieldset).toMatchSnapshot();
  });
});
