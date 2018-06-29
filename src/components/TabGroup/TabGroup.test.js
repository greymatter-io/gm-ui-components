import React from "react";
import renderer from "react-test-renderer";

import Tab from "../Tab";
import TabGroup from "./TabGroup";

describe("TabGroup", () => {
  it("matches snapshot", () => {
    const aTabGroup = renderer
      .create(
        <TabGroup label="Tab Group Label">
          <Tab label="Test" clickAction={() => {}} />
        </TabGroup>
      )
      .toJSON();
    expect(aTabGroup).toMatchSnapshot();
  });
});
