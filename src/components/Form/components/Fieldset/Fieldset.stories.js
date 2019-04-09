import React from "react";
import { storiesOf } from "@storybook/react";

import Fieldset from "./Fieldset";

const stories = storiesOf("Components|Fieldset", module);

stories.add(
  "default",
  () => {
    return <Fieldset name="Fieldest" />;
  },
  {
    info: {
      text: "A fieldest for groups of form elements."
    }
  }
);
