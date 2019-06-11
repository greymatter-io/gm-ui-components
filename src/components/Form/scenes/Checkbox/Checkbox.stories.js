import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";

import Checkbox from "./Checkbox";

const stories = storiesOf("Components|Checkbox", module);

stories.add(
  "Default",
  () => {
    return (
      <Checkbox
        defaultChecked={boolean("defaultChecked")}
        disabled={boolean("disabled")}
        label={text("label")}
        labelPosition={select("labelPosition", [
          "top",
          "bottom",
          "left",
          "right"
        ])}
        onChange={e => {
          alert("checked: " + e.target.checked);
        }}
      />
    );
  },
  {
    info: {
      text: "A checkbox form input with a label."
    }
  }
);
