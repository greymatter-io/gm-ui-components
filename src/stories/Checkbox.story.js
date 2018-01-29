import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs/react";
import { Checkbox } from "../components";

const stories = storiesOf("Checkbox", module);

stories.addDecorator(withKnobs);

stories.add("standard", () => {
  return (
    <div style={{ width: "50vw" }}>
      <Checkbox label={text("label", "this is a checkbox")} />
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
        defaultChecked="true"
        onChange={e => {
          alert("checked: " + e.target.checked);
        }}
      />
    </div>
  );
});
