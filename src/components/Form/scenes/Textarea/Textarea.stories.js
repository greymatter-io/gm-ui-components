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
        autoFocus={boolean("autoFocus")}
        hint={text("hint")}
        label={text("label")}
        defaultValue={text("defaultValue")}
        placeholder={text("placeholder")}
        maxLength={number("maxLength")}
      />
    );
  },
  {
    info: {
      text: "A text input component with label and optional hint."
    }
  }
);
