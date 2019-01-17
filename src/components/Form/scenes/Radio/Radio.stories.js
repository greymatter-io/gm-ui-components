import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import { Radio } from "components";

const stories = storiesOf("Components|Radio", module);

stories.add("standard", () => {
  return (
    <Radio
      labelPosition={select(
        "labelPosition",
        ["top", "bottom", "left", "right"],
        "right"
      )}
      label={text("label", "this is a radio input")}
    />
  );
});

stories.add(
  "with props",
  () => {
    return (
      <Radio
        label="this is a checkbox defaulted to false with an onchange event handler"
        defaultChecked={false}
        onChange={e => {
          alert("checked: " + e.target.checked);
        }}
      />
    );
  },
  {
    info: {
      text: "A general text input component with label and optional hint."
    }
  }
);

stories.add(
  "in a group",
  () => {
    return (
      <React.Fragment>
        <Radio
          label={text("label", "label")}
          defaultChecked={true}
          name="radioGroup"
        />
        <Radio label={text("label", "label")} name="radioGroup" />
        <Radio label={text("label", "label")} name="radioGroup" />
      </React.Fragment>
    );
  },
  {
    info: {
      text: "A general text input component with label and optional hint."
    }
  }
);
