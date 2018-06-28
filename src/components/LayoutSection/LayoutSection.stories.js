import React from "react";
import { storiesOf } from "@storybook/react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import LayoutSection from "./LayoutSection";
import { Readout, ReadoutGroup, Bell, Summary } from "../";

storiesOf("Layout Section", module)
  .addDecorator(withKnobs)
  .add(
    "default",
    withInfo("An flexbox layout component")(() => {
      return (
        <LayoutSection
          title={text("title", "Test Layout")}
          icon={() => <Bell size={"24px"} />}
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
                  icon: () => <Summary size={"24px"} />
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
