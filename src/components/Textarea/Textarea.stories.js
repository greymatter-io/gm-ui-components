import React from "react";
import { text, number, boolean } from "@storybook/addon-knobs";

import Textarea from "./Textarea";

export default { title: "Textarea", component: Textarea };

export const defaultStory = () => {
  return (
    <Textarea
      autoFocus={boolean("autoFocus")}
      hint={text("hint")}
      label={text("label")}
      defaultValue={text("defaultValue")}
      placeholder={text("placeholder")}
      maxLength={number("maxLength")}
    />
  );
};

defaultStory.story = {
  name: "Default",

  parameters: {
    info: {
      text: "A text input component with label and optional hint."
    }
  }
};

export const typical = () => {
  return (
    <Textarea
      autoFocus={boolean("autoFocus")}
      hint={text("hint", "Hints are better than placeholders to help users.")}
      label={text("label", "Always label your inputs")}
      defaultValue={text("defaultValue", "User content")}
      placeholder={text("placeholder", "Placeholders aren't magic.")}
      maxLength={number("maxLength")}
    />
  );
};

typical.story = {
  name: "Typical",

  parameters: {
    info: {
      text: "A text input component with label and optional hint."
    }
  }
};
