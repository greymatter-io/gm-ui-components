import React from "react";
import { select, text } from "@storybook/addon-knobs";

import Spinner from "./Spinner";

export default { title: "Spinner" };

const orientations = {
  vertical: "vertical",
  horizontal: "horizontal"
};

export const defaultStory = () => {
  return (
    <Spinner
      orientation={select("orientation", orientations)}
      message={text("message")}
    />
  );
};

defaultStory.story = {
  name: "Default",

  parameters: {
    info: {
      text:
        "Spinner to indicate the loading state of an interface element or background process."
    }
  }
};
