import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs";

import ErrorCard from "./ErrorCard";

const stories = storiesOf("Components|Error Card", module);

const orientations = {
  vertical: "vertical",
  horizontal: "horizontal"
};

stories.add(
  "default",
  () => (
    <ErrorCard
      detail={text("detail", "Something went wrong.")}
      message={text("message", "Uh oh")}
      orientation={select("orientation", orientations)}
    />
  ),
  {
    info: {
      text: "A stateless card component that renders an error message."
    }
  }
);
