import React from "react";
import { storiesOf } from "@storybook/react";
import { array, number, boolean } from "@storybook/addon-knobs";
import Breadcrumbs from "./Breadcrumbs";

const stories = storiesOf("Components|Breadcrumbs", module);
const defaultCrumbs = ["Home", "View", "System", "Data", "Graphs"];
const breadCrumbsInfo =
  "A React component that allows users to know their location. Use <Breadcrumbs> and pass it an array of crumbs and an optional maxItems prop.  If there are more children than the maximum, it will render a collapsed view.";

stories.add(
  "default",
  () => {
    return (
      <Breadcrumbs
        crumbs={array("crumbs", defaultCrumbs)}
        maxItems={number("maxItems", 5)}
        collapse={boolean("collapse", false)}
      />
    );
  },
  {
    info: {
      text: breadCrumbsInfo
    }
  }
);
