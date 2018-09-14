import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Fieldset from "./Fieldset";

const stories = storiesOf("Components|Fieldset", module);

stories.add(
  "default",
  withInfo("A fieldest for groups of form elements.")(() => {
    return <Fieldset name="Fieldest" />;
  })
);
