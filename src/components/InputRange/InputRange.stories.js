import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs";

import InputRange from "./InputRange";

const stories = storiesOf("Components|InputRange", module);

stories.add(
  "Default",
  () => {
    return (
      <InputRange
        autoFocus={boolean("autoFocus")}
        hint={text("hint")}
        label={text("label")}
        labelPosition={select("labelPosition", [
          "top",
          "right",
          "bottom",
          "left"
        ])}
        defaultValue={text("defaultValue")}
      />
    );
  },
  {
    info: {
      text: "A range input component with label and optional hint."
    }
  }
);
