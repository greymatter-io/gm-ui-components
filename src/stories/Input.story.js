import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";
import { Input } from "../components";

const stories = storiesOf("Input", module);

stories.addDecorator(withKnobs);

stories.add("standard", () => {
  return (
    <div style={{ width: "50vw" }}>
      <Input
        style={{
          margin: "10px"
        }}
        placeholder="Default"
        onChange={e => console.log("value changed", e)}
        maxLength={number("maxLength", 100)}
      />
      <Input
        shouldFitContainer={boolean("shouldFitContainer", true)}
        style={{
          margin: "10px"
        }}
        placeholder="shouldFitContainer"
        onChange={e => console.log("value changed", e)}
        maxLength={number("maxLength", 100)}
      />
    </div>
  );
});
