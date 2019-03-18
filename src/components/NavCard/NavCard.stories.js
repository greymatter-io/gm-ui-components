import React from "react";

import { storiesOf } from "@storybook/react";
import { text, object } from "@storybook/addon-knobs";

import NavCard from "components/NavCard";

import { IconSummary } from "components";

const stories = storiesOf("Components|NavCard", module);

stories
  .add(
    "default",
    () => {
      return (
        <a href="#" style={{ textDecoration: "none" }}>
          <NavCard
            icon={() => <IconSummary size="24px" />}
            details={object("details", [
              { name: "Memory Used", value: "116 MB" },
              { name: "CPU Usage", value: "99%" }
            ])}
            title={text("title", "Summary")}
          />
        </a>
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
    "NavCard with children",
    () => {
      return (
        <a href="#" style={{ textDecoration: "none" }}>
          <NavCard
            icon={() => <IconSummary size="24px" />}
            title={text("Title", "Summary")}
          >
            {() => (
              <span style={{ paddingLeft: "38px", color: "white" }}>
                NavCard Child Element
              </span>
            )}
          </NavCard>
        </a>
      );
    },
    {
      info: {
        text:
          "NavCards may contain children for display purposes, such as sparklines."
      }
    }
  );
