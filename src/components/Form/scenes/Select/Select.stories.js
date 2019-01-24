import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";
import { Select } from "components";

const stories = storiesOf("Components|Select", module);

stories.add("standard", () => {
  return (
    <div style={{ width: "50vw" }}>
      <Select
        labelPosition={select(
          "labelPosition",
          ["top", "bottom", "left", "right"],
          "right"
        )}
        label={text("label", "this is a radio input")}
      >
        <optgroup label="Swedish Cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
        </optgroup>
        <optgroup label="German Cars">
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </optgroup>
      </Select>
    </div>
  );
});
