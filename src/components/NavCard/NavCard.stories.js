import React from "react";

import { storiesOf } from "@storybook/react";
import { text, object } from "@storybook/addon-knobs/react";

import NavCard from "components/NavCard";

import { IconSummary } from "components";

storiesOf("NavCard", module)
  .add("Basic NavCard", () => {
    return (
      <a href="#" style={{ textDecoration: "none" }}>
        <NavCard
          icon={() => <IconSummary size="24px" />}
          details={object("Detail Lines", [
            { name: "Memory Used", value: "116 MB" },
            { name: "CPU Usage", value: "99%" }
          ])}
          title={text("Title", "Summary")}
        />
      </a>
    );
  })
  .add("NavCard with children", () => {
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
  });
