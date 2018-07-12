import React from "react";
import { storiesOf } from "@storybook/react";
import { text, number, withKnobs } from "@storybook/addon-knobs/react";

import Input from "./Input";

storiesOf("Input", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Input
      placeholder={text("placeholder", "Placeholder")}
      maxLength={number("maxLength", 25)}
    />
  ));
