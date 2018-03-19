import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Tab from "./Tab";

describe("Tab", () => {
  it("matches snapshot", () => {
    const aTab = renderer.create(<Tab label="Test" />).toJSON();
    expect(aTab).toMatchSnapshot();
  });
});
