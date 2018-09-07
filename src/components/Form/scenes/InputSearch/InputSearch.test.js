import React from "react";
import { shallow } from "enzyme";

import InputSearch from "./InputSearch";

describe("InputSearch", () => {
  it("matches snapshot", () => {
    const aInputSearch = shallow(
      <InputSearch label="Test" clickAction={() => {}} />
    );
    expect(aInputSearch).toMatchSnapshot();
  });
});
