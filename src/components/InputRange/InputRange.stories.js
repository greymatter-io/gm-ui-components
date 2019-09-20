import React from "react";
import { text, boolean, select } from "@storybook/addon-knobs";

import InputRange from "./InputRange";

export default { title: "InputRange" };

export const defaultStory = () => {
  return (
    <InputRange
      autoFocus={boolean("autoFocus")}
      hint={text("hint")}
      label={text("label")}
      labelPosition={select("labelPosition", [
        "top",
        "right",
        "bottom",
        "left"
      ])}
      defaultValue={text("defaultValue")}
    />
  );
};

defaultStory.story = {
  name: "Default",

  parameters: {
    info: {
      text: "A range input component with label and optional hint."
    }
  }
};

export const typical = () => {
  return (
    <InputRange
      label="Coolness"
      labelPosition="top"
      hint="Higher values mean more coolness"
    />
  );
};

typical.story = {
  name: "Typical",

  parameters: {
    info: {
      text: "A range input component with label and optional hint."
    }
  }
};
