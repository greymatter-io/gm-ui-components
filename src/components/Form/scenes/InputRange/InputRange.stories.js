import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";

import InputRange from "./InputRange";

const stories = storiesOf("Components|InputRange", module);

stories.add(
  "default",
  () => {
    return (
      <InputRange
        autoFocus={boolean("autoFocus", false)}
        hint={text("hint", "hint")}
        label={text("label", "label")}
        defaultValue={text("defaultValue", "defaultValue")}
      />
    );
  },
  {
    info: {
      text: "A range input component with label and optional hint."
    }
  }
);
