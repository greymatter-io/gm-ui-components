import React from "react";
import renderer from "react-test-renderer";

import Tab from "./Tab";

describe("Tab", () => {
  it("matches snapshot", () => {
    const aTab = renderer
      .create(<Tab label="Test" clickAction={() => {}} />)
      .toJSON();
    expect(aTab).toMatchSnapshot();
  });
});
