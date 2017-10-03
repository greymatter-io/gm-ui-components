import React from "react";

import { storiesOf } from "@storybook/react";

import { Footer } from "../components";

const stories = storiesOf("Footer", module);

stories.add("Full Width", () => {
  return <Footer />;
});
