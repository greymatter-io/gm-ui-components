import React from "react";
import { storiesOf } from "@storybook/react";
import { text, number, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import InputNumber from "./InputNumber";

const stories = storiesOf("Components|InputNumber", module);

stories.add(
  "default",
  withInfo("A text input component with label and optional hint.")(() => {
    return (
      <InputNumber
        autoFocus={boolean("autoFocus", false)}
        hint={text("hint", "hint")}
        label={text("label", "label")}
        defaultValue={text("defaultValue", "defaultValue")}
        placeholder={text("placeholder", "placeholder")}
        maxLength={number("maxLength", 25)}
      />
    );
  })
);
