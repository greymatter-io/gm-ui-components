import React from "react";
import { storiesOf } from "@storybook/react";
import { text, number, select, boolean } from "@storybook/addon-knobs";

import InputField from "./InputField";

const stories = storiesOf("Components|InputField", module);

stories.add(
  "Default",
  () => {
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
  },
  {
    info: {
      text: "A general text input component with label and optional hint."
    }
  }
);
