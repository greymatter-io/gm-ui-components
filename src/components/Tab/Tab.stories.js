import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Tab from "./Tab";

const stories = storiesOf("Tab", module);

stories.addDecorator(withKnobs);

stories.add(
  "Tab",
  withInfo(
    "An individual Tab component that is meant to be used as a child of TabGroup."
  )(() => {
    return (
      <div style={{ width: "100vw", display: "flex", height: "40px" }}>
        <Tab
          active={boolean("active", true)}
          clickAction={() => alert("hello")}
          disabled={boolean("disabled", false)}
          label={text("label", "Active Tab")}
        />
      </div>
    );
  })
);
