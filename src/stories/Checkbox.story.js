import React from "react";

import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  array,
  number,
  boolean,
  text
} from "@storybook/addon-knobs";
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
