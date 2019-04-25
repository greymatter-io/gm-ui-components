import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import ErrorCard from "./ErrorCard";

const stories = storiesOf("Components|Error Card", module);

stories.add(
  "default",
  () => (
    <ErrorCard
      errorMsg={text("errorMsg", "Uh oh")}
      errorDetail={text("errorDetail", "Something went wrong.")}
    />
  ),
  {
    info: {
      text: "A stateless card component that renders an error message."
    }
  }
);
