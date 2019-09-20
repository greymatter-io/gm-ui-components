import React from "react";
import { array, boolean } from "@storybook/addon-knobs";
import { Breadcrumbs } from "..";

export default { title: "Breadcrumbs" };

const defaultCrumbs = [
  "Home",
  "Breadcrumb Item With Longer Text",
  "System",
  "Data",
  "Graphs"
];
const breadCrumbsInfo =
  "A React component that allows users to know their location. Use <Breadcrumbs> and pass it an array of crumbs to render.  Breadcrumb items will expand or contract to fill any allowed space. Truncated breadcrumb items expand to full natural width when hovered or focused to reveal content.";

export const defaultStory = () => {
  return (
    <Breadcrumbs
      crumbs={array("crumbs", defaultCrumbs)}
      hideDelimiter={boolean("hideDelimiter")}
    />
  );
};

defaultStory.story = {
  name: "Default",

  parameters: {
    info: {
      text: breadCrumbsInfo
    }
  }
};

export const withLimitedContainerSize = () => {
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
        hideDelimiter={boolean("hideDelimiter")}
      />
    </div>
  );
};

withLimitedContainerSize.story = {
  name: "With limited container size",

  parameters: {
    info: {
      text: breadCrumbsInfo
    }
  }
};
