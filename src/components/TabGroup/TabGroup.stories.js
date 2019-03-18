import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import Tab from "components/Tab";
import TabGroup from "./TabGroup";

const stories = storiesOf("Components|Tabs", module);

stories.add(
  "TabGroup",
  () => {
    return (
      <TabGroup label={text("label", "Tab Group")}>
        <Tab clickAction={() => {}} label="Active Tab" active />
        <Tab clickAction={() => {}} label="Label" />
        <Tab clickAction={() => {}} label="Disabled" disabled />
      </TabGroup>
    );
  },
  {
    info: {
      text: "A TabGroup component that wraps individual Tab components"
    }
  }
);
