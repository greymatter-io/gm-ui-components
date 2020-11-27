import React from "react";
import { storiesOf } from "@storybook/react";
import { number, select, boolean, text } from "@storybook/addon-knobs";

import Progress from "./Progress";

const stories = storiesOf("Components|Progress", module);

stories.add(
  "Default",
  () => {
    return (
      <Progress
        value={text("value", 0.35)}
        max={number("max", 1)}
        shape={select('shape', ['bar', 'pie'], 'bar')}
        reverse={boolean('reverse', false)}
      />
    );
  },
  {
    info: {
      text:
        "Progress takes the browser's default progress element and extends it with additional states and styles, particularly the 'Pie' alternate shape."
    }
  }
);
