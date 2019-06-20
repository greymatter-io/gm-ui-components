import React from "react";
import { storiesOf } from "@storybook/react";
import { text, number, boolean } from "@storybook/addon-knobs";

import Textarea from "./Textarea";

const stories = storiesOf("Components|Textarea", module);

stories
  .add(
    "Default",
    () => {
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
    },
    {
      info: {
        text: "A text input component with label and optional hint."
      }
    }
  )
  .add(
    "Typical",
    () => {
      return (
        <Textarea
          autoFocus={boolean("autoFocus")}
          hint={text(
            "hint",
            "Hints are better than placeholders to help users."
          )}
          label={text("label", "Always label your inputs")}
          defaultValue={text("defaultValue", "User content")}
          placeholder={text("placeholder", "Placeholders aren't magic.")}
          maxLength={number("maxLength")}
        />
      );
    },
    {
      info: {
        text: "A text input component with label and optional hint."
      }
    }
  );
