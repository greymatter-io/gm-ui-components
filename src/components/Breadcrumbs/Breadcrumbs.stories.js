import React from "react";
import { storiesOf } from "@storybook/react";
import { array, number, boolean } from "@storybook/addon-knobs/react";
import Breadcrumbs from "./Breadcrumbs";
import { withInfo } from "@storybook/addon-info";

const stories = storiesOf("Breadcrumbs", module);
const defaultCrumbs = ["Home", "View", "Data", "Graphs"];
const breadCrumbsInfo =
  "A React component that allows users to know their location. Use <Breadcrumbs> and pass it an array of crumbs and an optional maxItems prop.  If there are more children than the maximum, it will render a collapsed view.";

stories.add(
  "simple breadcrumbs",
  withInfo(breadCrumbsInfo)(() => {
    return (
      <Breadcrumbs
        crumbs={array("crumbs", defaultCrumbs)}
        maxItems={number("maxItems", 10)}
        collapse={boolean("collapse", false)}
      />
    );
  })
);

stories.add(
  "truncated breadcrumbs",
  withInfo(breadCrumbsInfo)(() => {
    return (
      <Breadcrumbs
        crumbs={array("crumbs", defaultCrumbs)}
        maxItems={number("maxItems", 3)}
        collapse={boolean("collapse", false)}
      />
    );
  })
);
