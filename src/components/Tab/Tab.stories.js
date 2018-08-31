import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Tab from "./Tab";

const stories = storiesOf("Components/Tabs", module);

stories.add(
  "Tab",
  withInfo(
    "An individual Tab component that is meant to be used as a child of TabGroup."
  )(() => {
    return (
      <div style={{ width: "100vw", display: "flex", height: "40px" }}>
        <Tab
          clickAction={() => alert("hello")}
          label={text("label", "Active Tab")}
          active={boolean("active", true)}
          disabled={boolean("disabled", false)}
        />
      </div>
    );
  })
);
