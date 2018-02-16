import React from "react";

import { storiesOf, select } from "@storybook/react";
import StorybookWrap from "./utils/StorybookWrap";

import { AppFooter } from "../components";


const stories = storiesOf("AppFooter", module);

stories.add("Full Width", () => {
  return (
    <StorybookWrap storyTheme='decipher'>
      <AppFooter />
    </StorybookWrap>);
});
