import React from "react";

import { text, select, boolean } from "@storybook/addon-knobs";
import { Select } from "components";

export default { title: "Select" };

export const defaultStory = () => {
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
};

defaultStory.story = {
  name: "Default"
};

export const typical = () => {
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
};

typical.story = {
  name: "Typical"
};
