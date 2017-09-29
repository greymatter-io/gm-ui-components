import React from "react";
import PropTypes from "prop-types";
import { storiesOf } from "@storybook/react";
import { withKnobs, array, number } from "@storybook/addon-knobs";
import { Breadcrumbs, BreadcrumbItem } from "../components";
import { withInfo } from "@storybook/addon-info";

const stories = storiesOf("Breadcrumbs", module);
const label = "Breadcrumbs";
const defaultCrumbs = ["Home", "View", "Data", "Graphs"];
const separator = ",";
let crumbs, maxItems;

stories.addDecorator(withKnobs);

stories.add(
  "simple breadcrumbs",
  withInfo(
    "A React component that allows users to know their location. Use <Breadcrumbs> as the wrapper component and <BreadcrumbsItem> for rendering an individual link. The container accepts a maxItems prop that sets the amount of breadcrumbs to be rendered. If there are more children than the maximum, it will render a collapsed view."
  )(() => {
    crumbs = array(label, defaultCrumbs, separator);
    return (
      <Breadcrumbs>
        {crumbs.map(item => {
          return <BreadcrumbItem>{item}</BreadcrumbItem>;
        })}
      </Breadcrumbs>
    );
  })
);

stories.add(
  "truncated breadcrumbs",
  withInfo(
    "A React component that allows users to know their location. Use <Breadcrumbs> as the wrapper component and <BreadcrumbsItem> for rendering an individual link. The container accepts a maxItems prop that sets the amount of breadcrumbs to be rendered. If there are more children than the maximum, it will render a collapsed view."
  )(() => {
    crumbs = array(label, defaultCrumbs, separator);
    maxItems = number("Max Items", 3);
    return (
      <Breadcrumbs maxItems={maxItems}>
        {crumbs.map((item, i) => {
          return <BreadcrumbItem key={i}>{item}</BreadcrumbItem>;
        })}
      </Breadcrumbs>
    );
  })
);
