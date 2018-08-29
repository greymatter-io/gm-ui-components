import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import LayoutSection from "./LayoutSection";
import { Readout, ReadoutGroup, IconBell, IconSummary } from "../";

storiesOf("Layout Section", module).add(
  "default",
  withInfo("An flexbox layout component")(() => {
    return (
      <LayoutSection
        title={text("title", "Test Layout")}
        icon={() => <IconBell size={"24px"} />}
      >
        <ReadoutGroup>
          <Readout
            readoutItems={[
              {
                title: "Uptime",
                value: "1000ms"
              }
            ]}
          />
          <Readout
            primary
            readoutItems={[
              {
                title: "Error Rate",
                value: "0.000%",
                icon: () => <IconSummary size={"24px"} />
              }
            ]}
          />
          <Readout
            readoutItems={[
              {
                title: "Host CPU Cores",
                value: "0"
              }
            ]}
          />
        </ReadoutGroup>
      </LayoutSection>
    );
  })
);
