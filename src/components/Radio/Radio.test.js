import React from "react";
import { shallow } from "enzyme";

import Radio from "./Radio";

describe("Radio", () => {
  it("should render", () => {
    const aRadio = shallow(<Radio label="label" />).dive();
    expect(aRadio).toMatchSnapshot();
  });
});
