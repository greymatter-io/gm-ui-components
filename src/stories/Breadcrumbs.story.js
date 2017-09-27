import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Breadcrumbs, BreadcrumbItem } from "../components";

const stories = storiesOf("Footer", module);

storiesOf("Breadcrumb", module).add("Simple Breadcrumbs", () => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem path="/home" text="Home" />
      <BreadcrumbItem path="/next" text="Next" />
    </Breadcrumbs>
  );
});
