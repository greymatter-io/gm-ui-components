import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Tab from "../Tab";
import TabGroup from "./TabGroup";

describe("TabGroup", () => {
  it("matches snapshot", () => {
    const aTabGroup = renderer
      .create(
        <TabGroup label="Tab Group Label">
          <Tab label="Test" />
        </TabGroup>
      )
      .toJSON();
    expect(aTabGroup).toMatchSnapshot();
  });
});
