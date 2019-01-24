import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs";
import AppFooter from "./AppFooter";

const stories = storiesOf("Components|App Footer", module);

stories.add(
  "default",
  () => (
    <AppFooter
      copyrightText={text("copyrightText")}
      useExternalLinks={boolean("useExternalLinks", true)}
    />
  ),
  {
    info: {
      text: `AppFooter for Grey Matter products.`
    }
  }
);
