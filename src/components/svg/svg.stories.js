import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, color } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Configuration from "./Configuration.svg";

const stories = storiesOf("SVG test", module);

stories.add(
  "default",
  withInfo("SVG test")(() => {
    return <Configuration glyphColor={color("glyphColor", "#000")} />;
  })
);
