import React from "react";
import { text } from "@storybook/addon-knobs";

import Tab from "components/Tab";
import TabGroup from "./TabGroup";

export default { title: "TabGroup" };

export const defaultStory = () => {
  return (
    <TabGroup label={text("label")}>
      <Tab clickAction={() => {}} label="Active Tab" tabIndex="0" active />
      <Tab clickAction={() => {}} label="Label" tabIndex="0" />
      <Tab clickAction={() => {}} label="Disabled" tabIndex="0" disabled />
    </TabGroup>
  );
};

defaultStory.story = {
  name: "Default",

  parameters: {
    info: {
      text: "A TabGroup component that wraps individual Tab components"
    }
  }
};
