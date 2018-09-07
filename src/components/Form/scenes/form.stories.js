import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Input from "./Input";
import InputText from "./InputText";

const stories = storiesOf("Components|Form", module);

stories.add(
  "Form Inputs",
  withInfo("A checkbox form input with a label.")(() => {
    return (
      <div>
        <Checkbox
          labelPosition={select(
            "labelPosition",
            ["top", "bottom", "left", "right"],
            "right"
          )}
          label={text("label", "this is a checkbox")}
          defaultChecked={true}
        />
        <Radio
          labelPosition={select(
            "labelPosition",
            ["top", "bottom", "left", "right"],
            "right"
          )}
          label={text("label", "this is a radio button")}
          defaultChecked={true}
        />
        <Input type="text" label="Input field" />
        <InputText label="Text input" />
      </div>
    );
  })
);
