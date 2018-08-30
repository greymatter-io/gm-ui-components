import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs/react";

import Spinner from "./Spinner";

const orientations = {
  vertical: "vertical",
  horizontal: "horizontal"
};

storiesOf("Spinner", module).add("default", () => (
  <Spinner
    orientation={select("orientation", orientations)}
    message={text("Loading Message")}
  />
));
