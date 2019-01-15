import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import Spinner from "./Spinner";

const stories = storiesOf("Components|Spinner", module);

const orientations = {
  vertical: "vertical",
  horizontal: "horizontal"
};

stories.add(
  "default",
  withInfo(
    "Spinner to indicate the loading state of an interface element or background process."
  )(() => {
    return (
      <Spinner
        orientation={select("orientation", orientations)}
        message={text("message")}
      />
    );
  })
);
