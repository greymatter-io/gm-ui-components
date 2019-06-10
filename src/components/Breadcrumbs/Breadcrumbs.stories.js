import React from "react";
import { storiesOf } from "@storybook/react";
import { array, boolean } from "@storybook/addon-knobs";
import { Breadcrumbs } from "..";

const stories = storiesOf("Components|Breadcrumbs", module);
const defaultCrumbs = [
  "Home",
  "Breadcrumb Item With Longer Text",
  "System",
  "Data",
  "Graphs"
];
const breadCrumbsInfo =
  "A React component that allows users to know their location. Use <Breadcrumbs> and pass it an array of crumbs to render.  Breadcrumb items will expand or contract to fill any allowed space. Truncated breadcrumb items expand to full natural width when hovered or focused to reveal content.";

stories
  .add(
    "default",
    () => {
      return (
        <Breadcrumbs
          crumbs={array("crumbs", defaultCrumbs)}
          hideDelimiter={boolean("hideDelimiter", false)}
        />
      );
    },
    {
      info: {
        text: breadCrumbsInfo
      }
    }
  )
  .add(
    "with smaller container",
    () => {
      return (
        <div
          style={{
            width: "350px",
            border: "1px solid #ddd",
            padding: "4px",
            borderRadius: "2px"
          }}
        >
          <Breadcrumbs
            crumbs={array("crumbs", defaultCrumbs)}
            hideDelimiter={boolean("hideDelimiter", false)}
          />
        </div>
      );
    },
    {
      info: {
        text: breadCrumbsInfo
      }
    }
  );
