import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs/react";
import Checkbox from "./Checkbox";

const stories = storiesOf("Checkbox", module);

stories.add("standard", () => {
  return (
    <div style={{ width: "50vw" }}>
      <Checkbox
        labelPosition={select(
          "labelPosition",
          ["top", "bottom", "left", "right"],
          "top"
        )}
        label={text("label", "this is a checkbox")}
      />
    </div>
  );
});

stories.add("with props", () => {
  return (
    <div style={{ width: "50vw" }}>
      <Checkbox
        label={text(
          "label",
          "this is a checkbox defaulted to true with an onchange event handler"
        )}
        defaultChecked={true}
        onChange={e => {
          alert("checked: " + e.target.checked);
        }}
      />
    </div>
  );
});
