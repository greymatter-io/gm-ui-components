import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import InputRange from "./InputRange";

const stories = storiesOf("Components|InputRange", module);

stories.add(
  "default",
  withInfo("A range input component with label and optional hint.")(() => {
    return (
      <InputRange
        autoFocus={boolean("autoFocus", false)}
        hint={text("hint", "hint")}
        label={text("label", "label")}
        defaultValue={text("defaultValue", "defaultValue")}
      />
    );
  })
);
