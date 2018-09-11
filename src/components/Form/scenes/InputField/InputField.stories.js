import React from "react";
import { storiesOf } from "@storybook/react";
import { text, number, select, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import InputField from "./InputField";

const stories = storiesOf("Components|InputField", module);

stories.add(
  "default",
  withInfo("A general text input component with label and optional hint.")(
    () => {
      const FormFieldType = select(
        "Field Type",
        ["text", "search", "number", "password", "email", "telephone", "url"],
        "text"
      );

      return (
        <InputField
          autoFocus={boolean("autoFocus", false)}
          required={boolean("Required", false)}
          readonly={boolean("Readonly", false)}
          hint={text("hint", "hint")}
          type={FormFieldType}
          label={text("label", "label")}
          defaultValue={text("defaultValue", "defaultValue")}
          placeholder={text("placeholder", "placeholder")}
          maxLength={number("maxLength", 25)}
        />
      );
    }
  )
);
