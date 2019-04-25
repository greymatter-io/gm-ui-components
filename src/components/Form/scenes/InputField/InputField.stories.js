import React from "react";
import { storiesOf } from "@storybook/react";
import { text, number, select, boolean } from "@storybook/addon-knobs";

import InputField from "./InputField";

const stories = storiesOf("Components|InputField", module);

stories.add(
  "default",
  () => {
    const FormFieldType = select(
      "type",
      ["text", "search", "number", "password", "email", "telephone", "url"],
      "text"
    );

    return (
      <InputField
        autoFocus={boolean("autoFocus", false)}
        required={boolean("required", false)}
        readonly={boolean("readonly", false)}
        hint={text("hint", "hint")}
        type={FormFieldType}
        label={text("label", "label")}
        defaultValue={text("defaultValue", "defaultValue")}
        placeholder={text("placeholder", "placeholder")}
        maxLength={number("maxLength", 25)}
      />
    );
  },
  {
    info: {
      text: "A general text input component with label and optional hint."
    }
  }
);
