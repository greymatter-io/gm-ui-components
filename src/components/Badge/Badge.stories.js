import React from "react";
import { storiesOf } from "@storybook/react";
import { text, color } from "@storybook/addon-knobs";
import Badge from "./Badge";

const stories = storiesOf("Components|Badge", module);

stories.add(
  "Default",
  () => {
    return <Badge color={color("blue")}>{text("label", "Hello World")}</Badge>;
  },
  {}
);
