import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Wrapper from "./Wrapper";

describe("Wrapper", () => {
  it("should render", () => {
    const aWrapper = renderer.create(<Wrapper />).toJSON();
    expect(aWrapper).toMatchSnapshot();
  });
});
