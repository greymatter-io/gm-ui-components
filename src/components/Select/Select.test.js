import React from "react";

import Select from "./Select";

describe("Select", () => {
  it("should render", () => {
    const aSelect = shallow(<Select label="label" />);
    expect(aSelect).toMatchSnapshot();
  });
});
