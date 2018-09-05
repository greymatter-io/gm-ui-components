import React from "react";
import { storiesOf } from "@storybook/react";
import { text, number, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Input from "./Input";

const stories = storiesOf("Components|Input", module);

stories.add(
  "default",
  withInfo("A general form input component with label and optional hint.")(
    () => {
      return (
        <Input
          autofocus={boolean("Autofocus", false)}
          hint={text("Hint", "Hint")}
          label={text("Label", "Label")}
          defaultValue={text("defaultValue", "defaultValue")}
          placeholder={text("Placeholder", "Placeholder")}
          maxLength={number("maxLength", 25)}
        />
      );
    }
  )
);
