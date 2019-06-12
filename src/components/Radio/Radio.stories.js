import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";

import { Radio } from "components";

const stories = storiesOf("Components|Radio", module);

stories.add("Default", () => {
  return (
    <Radio
      labelPosition={select("labelPosition", [
        "right",
        "bottom",
        "left",
        "top"
      ])}
      label={text("label")}
      disabled={boolean("disabled")}
      defaultChecked={boolean("defaultChecked")}
    />
  );
});

stories.add(
  "Typical",
  () => {
    return (
      <div>
        <Radio label="Item 1" defaultChecked={true} name="radioGroup" />
        <Radio label="Item 2" name="radioGroup" />
        <Radio label="Item 3" name="radioGroup" />
        <Radio label="Item 4" disabled name="radioGroup" />
      </div>
    );
  },
  {
    info: {
      text: "A general text input component with label and optional hint."
    }
  }
);
