import React from "react";
import renderer from "react-test-renderer";

import Radio from "./Radio";

describe("Radio", () => {
  it("should render", () => {
    const aRadio = renderer.create(<Radio label="label" />).toJSON();
    expect(aRadio).toMatchSnapshot();
  });
});
