import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs";
import AppFooter from "./AppFooter";
import { withInfo } from "@storybook/addon-info";

const stories = storiesOf("Components|App Footer", module);

stories.add(
  "default",
  withInfo("AppFooter for Grey Matter products.")(() => (
    <AppFooter
      copyrightText={text("copyrightText")}
      useExternalLinks={boolean("useExternalLinks", true)}
    />
  ))
);
