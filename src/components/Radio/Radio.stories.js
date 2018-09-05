import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs/react";
import Radio from "./Radio";

const stories = storiesOf("Radio", module);

stories.add("standard", () => {
  return (
    <div style={{ width: "50vw" }}>
      <Radio
        labelPosition={select(
          "labelPosition",
          ["top", "bottom", "left", "right"],
          "top"
        )}
        label={text("label", "this is a radio input")}
      />
    </div>
  );
});

stories.add("with props", () => {
  return (
    <div style={{ width: "50vw" }}>
      <Radio
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

stories.add("in a group", () => {
  return (
    <div style={{ width: "50vw" }}>
      <Radio
        label={text("label", "label")}
        defaultChecked={true}
        name="radioGroup"
      />
      <Radio label={text("label", "label")} name="radioGroup" />
      <Radio label={text("label", "label")} name="radioGroup" />
    </div>
  );
});
