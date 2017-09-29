import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, array, number } from "@storybook/addon-knobs";
import { Breadcrumbs, BreadcrumbItem } from "../components";

const stories = storiesOf("Breadcrumbs", module);
const label = "Breadcrumbs";
const defaultCrumbs = ["Home", "View", "Data", "Graphs"];
const separator = ",";
let crumbs, maxItems;

stories.addDecorator(withKnobs);

stories.add("simple breadcrumbs", () => {
  crumbs = array(label, defaultCrumbs, separator);
  return (
    <Breadcrumbs>
      {crumbs.map(item => {
        return <BreadcrumbItem>{item}</BreadcrumbItem>;
      })}
    </Breadcrumbs>
  );
});

stories.add("collapsed breadcrumbs", () => {
  crumbs = array(label, defaultCrumbs, separator);
  maxItems = number("Max Items", 3);
  return (
    <Breadcrumbs maxItems={maxItems}>
      {crumbs.map((item, i) => {
        return <BreadcrumbItem key={i}>{item}</BreadcrumbItem>;
      })}
    </Breadcrumbs>
  );
});
