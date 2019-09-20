import React from "react";

import { text, object } from "@storybook/addon-knobs";

import NavCard from "components/NavCard";

import { IconSummary } from "components";

export default { title: "NavCard" };

export const defaultStory = () => {
  return <NavCard details={object("details")} title={text("title")} />;
};

defaultStory.story = {
  name: "Default",

  parameters: {
    info: {
      text:
        "A complex card-style navigation tab element, with space for optional small data readouts."
    }
  }
};

export const typical = () => {
  return (
    <NavCard
      icon={() => <IconSummary />}
      details={object("details", [
        { name: "Memory Used", value: "116 MB" },
        { name: "CPU Usage", value: "99%" }
      ])}
      title={text("title", "Summary")}
    />
  );
};

typical.story = {
  name: "Typical",

  parameters: {
    info: {
      text:
        "A complex card-style navigation tab element, with space for optional small data readouts."
    }
  }
};

export const withCustomChildren = () => {
  return (
    <NavCard icon={() => <IconSummary />} title={text("Title", "Summary")}>
      {() => (
        <span style={{ paddingLeft: "36px", color: "white" }}>
          NavCard Child Element
        </span>
      )}
    </NavCard>
  );
};

withCustomChildren.story = {
  name: "With custom children",

  parameters: {
    info: {
      text:
        "NavCards may contain children for display purposes, such as sparklines."
    }
  }
};
