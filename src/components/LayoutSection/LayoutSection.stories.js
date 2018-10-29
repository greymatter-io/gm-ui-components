import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import LayoutSection from "./LayoutSection";
import { Readout, ReadoutGroup, IconBell, IconSummary } from "../";

const ThemedBackground = styled.div`
  background-color: ${props => props.theme.COLOR_BACKGROUND_A};
`;

const stories = storiesOf("Components|Layout Section", module);

stories.add(
  "default",
  withInfo("A flexbox layout component")(() => {
    return (
      <ThemedBackground>
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
      </ThemedBackground>
    );
  })
);
