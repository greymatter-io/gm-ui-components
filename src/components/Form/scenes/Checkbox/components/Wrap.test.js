import React from "react";
import renderer from "react-test-renderer";

import Wrap from "./Wrap";

describe("Wrap", () => {
  it("should render", () => {
    const aWrap = renderer.create(<Wrap />).toJSON();
    expect(aWrap).toMatchSnapshot();
  });
});
