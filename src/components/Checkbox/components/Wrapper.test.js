import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Label from "./Label";

describe("Label", () => {
  it("should render", () => {
    const aLabel = renderer.create(<Label />).toJSON();
    expect(aLabel).toMatchSnapshot();
  });
});
