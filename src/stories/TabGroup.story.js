import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Tab from "../components/Tab";
import TabGroup from "../components/TabGroup";
import { Bell } from "../components/Glyphs";

const stories = storiesOf("TabGroup", module);

stories.add(
  "TabGroup",
  withInfo("A TabGroup component that wraps individual Tab components")(() => {
    return (
      <div style={{ width: "100vw" }}>
        <TabGroup label="Tab Group">
          <Tab label="Active Tab" active />
          <Tab label="Label">
            <Bell />
          </Tab>
          <Tab />
          <Tab label="Disabled" disabled />
        </TabGroup>
      </div>
    );
  })
);
