import React from "react";
import { storiesOf } from "@storybook/react";
import { text, number, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import InputRange from "./InputRange";

const stories = storiesOf("Components|InputRange", module);

stories.add(
  "default",
  withInfo("A range input component with label and optional hint.")(() => {
    return (
      <InputRange
        autoFocus={boolean("autoFocus", false)}
        hint={text("hint", "hint")}
        label={text("label", "label")}
        defaultValue={text("defaultValue", "defaultValue")}
      />
    );
  })
);

stories.add(
  "ticks",
  withInfo("A range input component with label, optional hint, and tickmarks.")(
    () => {
      return (
        <div>
          <InputRange
            autoFocus={boolean("autoFocus", false)}
            hint={text("hint", "hint")}
            list="tickmarks"
            label={text("label", "label")}
            defaultValue={text("defaultValue", "defaultValue")}
          />

          <datalist id="tickmarks">
            <option value="0" label="0%" />
            <option value="10" />
            <option value="20" />
            <option value="30" />
            <option value="40" />
            <option value="50" label="50%" />
            <option value="60" />
            <option value="70" />
            <option value="80" />
            <option value="90" />
            <option value="100" label="100%" />
          </datalist>
        </div>
      );
    }
  )
);
