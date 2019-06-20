import React from "react";
import { shallow } from "enzyme";

import Select from "./Select";

describe("Select", () => {
  it("should render", () => {
    const aSelect = shallow(<Select label="label" />).dive();
    expect(aSelect).toMatchSnapshot();
  });
});
