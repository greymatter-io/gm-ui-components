import React from "react";
import { text, number, select, boolean } from "@storybook/addon-knobs";

import InputField from "./InputField";

export default { title: "InputField", component: InputField };

export const defaultStory = () => {
  const FormFieldType = select("type", [
    "text",
    "search",
    "number",
    "password",
    "email",
    "telephone",
    "url"
  ]);

  return (
    <InputField
      autoFocus={boolean("autoFocus")}
      required={boolean("required")}
      readonly={boolean("readonly")}
      hint={text("hint")}
      type={FormFieldType}
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
      text: "A general text input component with label and optional hint."
    }
  }
};

export const typical = () => {
  return (
    <InputField
      hint="Hints are better than placeholders for user help"
      type="text"
      label="Always use a label"
      defaultValue="User content"
      placeholder="Placeholders aren't labels"
    />
  );
};

typical.story = {
  name: "Typical",

  parameters: {
    info: {
      text: "A general text input component with label and optional hint."
    }
  }
};
