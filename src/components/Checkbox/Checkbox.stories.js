import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs/react";
import Checkbox from "./Checkbox";

const stories = storiesOf("Components", module);

stories.add("Checkbox", () => {
  return (
    <div style={{ width: "50vw" }}>
      <Checkbox
        labelPosition={select(
          "labelPosition",
          ["top", "bottom", "left", "right"],
          "right"
        )}
        label={text(
          "label",
          "this is a checkbox"
        )}
        defaultChecked={true}
        onChange={e => {
          alert("checked: " + e.target.checked);
        }}
      />
    </div>
  );
});
