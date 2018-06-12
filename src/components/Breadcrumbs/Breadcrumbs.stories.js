import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, array, number } from "@storybook/addon-knobs/react";
import Breadcrumbs from "./Breadcrumbs";
import { withInfo } from "@storybook/addon-info";

const stories = storiesOf("Breadcrumbs", module);
const label = "Breadcrumbs";
const defaultCrumbs = [
  "Home",
  "View",
  "Data",
  "Graphs",
  "Things",
  "stuff",
  "garbage"
];
const separator = ",";
const breadCrumbsInfo =
  "A React component that allows users to know their location. Use <Breadcrumbs> and pass it an array of crumbs and an optional maxItems prop.  If there are more children than the maximum, it will render a collapsed view.";

let crumbs, maxItems;

stories.addDecorator(withKnobs);

stories.add(
  "simple breadcrumbs",
  withInfo(breadCrumbsInfo)(() => {
    crumbs = array(label, defaultCrumbs, separator);
    return (
      <div style={{ backgroundColor: "black", width: "300px" }}>
        <Breadcrumbs crumbs={crumbs} style={{ color: "white" }} />;
      </div>
    );
  })
);

stories.add(
  "truncated breadcrumbs",
  withInfo(breadCrumbsInfo)(() => {
    crumbs = array(label, defaultCrumbs, separator);
    maxItems = number("Max Items", 3);
    return <Breadcrumbs crumbs={crumbs} maxItems={maxItems} />;
  })
);
