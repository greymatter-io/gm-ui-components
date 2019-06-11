import React from "react";

import { storiesOf } from "@storybook/react";
import { text, object } from "@storybook/addon-knobs";

import NavCard from "components/NavCard";

import { IconSummary } from "components";

const stories = storiesOf("Components|NavCard", module);

stories
  .add(
    "Default",
    () => {
      return <NavCard details={object("details")} title={text("title")} />;
    },
    {
      info: {
        text:
          "A complex card-style navigation tab element, with space for optional small data readouts."
      }
    }
  )
  .add(
    "Typical",
    () => {
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
    },
    {
      info: {
        text:
          "A complex card-style navigation tab element, with space for optional small data readouts."
      }
    }
  )
  .add(
    "With custom children",
    () => {
      return (
        <NavCard icon={() => <IconSummary />} title={text("Title", "Summary")}>
          {() => (
            <span style={{ paddingLeft: "36px", color: "white" }}>
              NavCard Child Element
            </span>
          )}
        </NavCard>
      );
    },
    {
      info: {
        text:
          "NavCards may contain children for display purposes, such as sparklines."
      }
    }
  );
