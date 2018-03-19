import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { AppFooter } from "./index.js";

describe("A Footer container", () => {
  it("should render", () => {
    const anAppFooter = renderer.create(<AppFooter />).toJSON();
    expect(anAppFooter).toMatchSnapshot();
  });
});
