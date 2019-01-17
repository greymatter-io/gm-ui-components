import React from "react";
import { storiesOf } from "@storybook/react";
import { text, number, boolean } from "@storybook/addon-knobs";

import Textarea from "./Textarea";

const stories = storiesOf("Components|Textarea", module);

stories.add(
  "default",
  () => {
    return (
      <Textarea
        autoFocus={boolean("autoFocus", false)}
        hint={text("hint", "hint")}
        label={text("label", "label")}
        defaultValue={text("defaultValue", "defaultValue")}
        placeholder={text("placeholder", "placeholder")}
        maxLength={number("maxLength", 25)}
      />
    );
  },
  {
    info: {
      text: "A text input component with label and optional hint."
    }
  }
);
