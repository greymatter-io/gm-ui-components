import React from "react";
import { storiesOf } from "@storybook/react";
import { text, number, boolean } from "@storybook/addon-knobs/react";

import Input from "./Input";

storiesOf("Input", module).add("default", () => (
  <Input
    autoFocus={boolean("autoFocus", false)}
    hint={text("hint", "hint")}
    label={text("label", "label")}
    defaultValue={text("defaultValue", "defaultValue")}
    placeholder={text("placeholder", "placeholder")}
    maxLength={number("maxLength", 25)}
  />
));
