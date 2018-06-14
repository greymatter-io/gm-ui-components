import React from "react";
import { storiesOf } from "@storybook/react";
import { text, number } from "@storybook/addon-knobs/react";

import Input from "./Input";

storiesOf("Input", module).add("default", () => (
  <Input
    placeholder={text("placeholder", "Placeholder")}
    maxLength={number("maxLength", 25)}
  />
));
