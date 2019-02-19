import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import ErrorCard from "./ErrorCard";

const stories = storiesOf("Components|Error Card", module);

stories.add(
  "default",
  withInfo("A stateless card component that renders an error message.")(() => (
    <ErrorCard
      errorMsg={text("errorMsg", "Uh oh")}
      errorDetail={text("errorDetail", "Something went wrong.")}
    />
  ))
);
