import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Checkbox from "./Checkbox";

const stories = storiesOf("Components|Checkbox", module);

stories.add(
  "default",
  withInfo("A checkbox form input with a label.")(() => {
    return (
      <Checkbox
        labelPosition={select(
          "labelPosition",
          ["top", "bottom", "left", "right"],
          "right"
        )}
        label={text("label", "this is a checkbox")}
        defaultChecked={true}
        onChange={e => {
          alert("checked: " + e.target.checked);
        }}
      />
    );
  })
);
