import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import LayoutSection from "./LayoutSection";
import { Readout, ReadoutGroup, IconBell, IconSummary } from "../index.js";

const ThemedBackground = styled.div`
  background-color: ${props => props.theme.COLOR_BACKGROUND_DEFAULT};
`;

const stories = storiesOf("Components|Layout Section", module);

stories.add(
  "default",
  () => {
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
  },
  {
    info: {
      text: `A flexbox layout component`
    }
  }
);
