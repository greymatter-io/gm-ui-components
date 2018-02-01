import React from "react";

import { storiesOf } from "@storybook/react";

import { AppFooter } from "../components";

const stories = storiesOf("AppFooter", module);

stories.add("Full Width", () => {
  return <AppFooter />;
});
