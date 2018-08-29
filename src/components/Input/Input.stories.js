import React from "react";
import { storiesOf } from "@storybook/react";
import { text, number, boolean, withKnobs } from "@storybook/addon-knobs/react";

import Input from "./Input";

storiesOf("Input", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Input
      autofocus={boolean("Autofocus", false)}
      hint={text("Hint", "Hint")}
      label={text("Label", "Label")}
      defaultValue={text("defaultValue", "defaultValue")}
      placeholder={text("Placeholder", "Placeholder")}
      maxLength={number("maxLength", 25)}
    />
  ));
