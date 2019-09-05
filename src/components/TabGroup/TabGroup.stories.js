import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import Tab from "components/Tab";
import TabGroup from "./TabGroup";

const stories = storiesOf("Components|TabGroup", module);

stories.add(
  "Default",
  () => {
    return (
      <TabGroup label={text("label")}>
        <Tab clickAction={() => {}} label="Active Tab" tabIndex="0" active />
        <Tab clickAction={() => {}} label="Label" tabIndex="0" />
        <Tab clickAction={() => {}} label="Disabled" tabIndex="0" disabled />
      </TabGroup>
    );
  },
  {
    info: {
      text: "A TabGroup component that wraps individual Tab components"
    }
  }
);
