import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { text } from "@storybook/addon-knobs";

import Tab from "components/Tab";
import TabGroup from "./TabGroup";

const stories = storiesOf("TabGroup", module);

stories.add(
  "TabGroup",
  withInfo("A TabGroup component that wraps individual Tab components")(() => {
    return (
      <div style={{ width: "100vw" }}>
        <TabGroup label={text("label", "Tab Group")}>
          <Tab label="Active Tab" active />
          <Tab label="Label" />
          <Tab label="Disabled" disabled />
        </TabGroup>
      </div>
    );
  })
);
