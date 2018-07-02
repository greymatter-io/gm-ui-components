import React from "react";
import renderer from "react-test-renderer";

import Wrapper from "./Wrapper";

describe("Wrapper", () => {
  it("should render", () => {
    const aWrapper = renderer.create(<Wrapper />).toJSON();
    expect(aWrapper).toMatchSnapshot();
  });
});
