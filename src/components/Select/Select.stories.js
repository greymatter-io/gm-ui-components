import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { Select } from "components";

const stories = storiesOf("Components|Select", module);

stories
  .add("Default", () => {
    return (
      <Select
        labelPosition={select("labelPosition", [
          "top",
          "bottom",
          "left",
          "right"
        ])}
        label={text("label")}
        hint={text("hint")}
        disabled={boolean("disabled")}
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
    );
  })
  .add("Typical", () => {
    return (
      <Select
        labelPosition={select("labelPosition", [
          "top",
          "bottom",
          "left",
          "right"
        ])}
        label={text("label", "Which car brand is currently selected?")}
        hint={text("hint", "It's either the default or the one you picked")}
        disabled={boolean("disabled")}
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
    );
  });
