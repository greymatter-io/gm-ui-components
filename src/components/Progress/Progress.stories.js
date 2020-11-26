import React from "react";
import { storiesOf } from "@storybook/react";
import { number, select, text } from "@storybook/addon-knobs";

import Progress from "./Progress";

const stories = storiesOf("Components|Progress", module);

stories.add(
  "Default",
  () => {
    return (
      <Progress
        kind={select('kind', ['bar', 'pie'], 'pie')}
        percent={number("percent", 0.5, { step: 0.01, range: true, min: 0, max: 1 })}
      />
    );
  },
  {
    info: {
      text:
        "Progress to indicate the loading state of an interface element or background process."
    }
  }
);
