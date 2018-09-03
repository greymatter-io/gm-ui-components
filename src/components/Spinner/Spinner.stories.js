import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";


import Spinner from "./Spinner";

const orientations = {
  vertical: "vertical",
  horizontal: "horizontal"
};

storiesOf("Components", module)
  .add("Spinner",
  withInfo(
    "Spinner to indicate the loading state of an interface element or background process."
  )(() => {
    return (
      <Spinner
        orientation={select("orientation", orientations)}
        message={text("Loading Message")}
      />
    )
  }
));