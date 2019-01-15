import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { Radio } from "components";

const stories = storiesOf("Components|Radio", module);

stories.add(
  "standard",
  withInfo("A general text input component with label and optional hint.")(
    () => {
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
    }
  )
);

stories.add(
  "with props",
  withInfo("A general text input component with label and optional hint.")(
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
    }
  )
);

stories.add(
  "in a group",
  withInfo("A general text input component with label and optional hint.")(
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
    }
  )
);
