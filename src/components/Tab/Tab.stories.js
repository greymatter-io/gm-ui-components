import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";

import Tab from "./Tab";

const stories = storiesOf("Components|Tabs", module);

stories.add(
  "default",
  () => {
    return (
      <Tab
        clickAction={() => alert("hello")}
        label={text("label", "Active Tab")}
        active={boolean("active", true)}
        disabled={boolean("disabled", false)}
      />
    );
  },
  {
    info: {
      text:
        "An individual Tab component that is meant to be used as a child of TabGroup."
    }
  }
);
