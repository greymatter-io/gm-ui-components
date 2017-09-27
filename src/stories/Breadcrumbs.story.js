import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, array } from "@storybook/addon-knobs";
import { Breadcrumbs, BreadcrumbItem } from "../components";
const stories = storiesOf("Storybook Knobs", module);

stories.addDecorator(withKnobs);

stories.add("simple breadcrumbs", () => {
  const label = "Breadcrumbs";
  const defaultValue = ["Home", "View", "Data", "Graphs"];
  const separator = ",";
  const crumbs = array(label, defaultValue, separator);

  return (
    <Breadcrumbs>
      {crumbs.map(item => {
        return <BreadcrumbItem path={`/${item.trim()}`}>{item}</BreadcrumbItem>;
      })}
    </Breadcrumbs>
  );
});
