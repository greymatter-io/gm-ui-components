import React from "react";

import { text, select, boolean } from "@storybook/addon-knobs";

import { Radio } from "components";

export default { title: "Components|Radio", component: Radio };

export const defaultStory = () => {
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
};

defaultStory.story = {
  name: "Default"
};

export const typical = () => {
  return (
    <div>
      <Radio label="Item 1" defaultChecked={true} name="radioGroup" />
      <Radio label="Item 2" name="radioGroup" />
      <Radio label="Item 3" name="radioGroup" />
      <Radio label="Item 4" disabled name="radioGroup" />
    </div>
  );
};

typical.story = {
  name: "Typical",

  parameters: {
    info: {
      text: "A general text input component with label and optional hint."
    }
  }
};
