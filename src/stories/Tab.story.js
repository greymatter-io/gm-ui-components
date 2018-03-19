import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Tab from "../components/Tab";

const stories = storiesOf("Tab", module);

stories.addDecorator(withKnobs);

stories.add(
  "Tab",
  withInfo(
    "An individual Tab component that is meant to be used as a child of TabGroup."
  )(() => {
    return (
      <div style={{ width: "100vw", display: "flex" }}>
        <Tab
          label={text("label", "Active Tab")}
          active={boolean("active", true)}
          disabled={boolean("disabled", false)}
        />
      </div>
    );
  })
);
