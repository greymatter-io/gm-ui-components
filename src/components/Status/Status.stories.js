import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs";
import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";

import Status from "./Status";

const stories = storiesOf("Components|Status", module);

const statusOptions = ["indeterminate", "error", "info", "warning"];

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: ${({ theme }) => theme.COLOR_BACKGROUND_TWO};
  padding: ${spacingScale(4)};

  > * {
    margin: 0.5rem;
    background: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};
    color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
    border-radius: ${({ theme }) => theme.CORNER_RADIUS_CARD_DEFAULT};
  }
`;

stories
  .add(
    "Default",
    () => {
      return (
        <Status
          isBlock={boolean("isBlock")}
          statusType={select("statusType", statusOptions)}
          message={text("message")}
          detail={text("detail")}
        />
      );
    },
    {
      info: {
        text:
          "Indicates the status of a content area. Provides text style and graphics for 'Indeterimate', 'Error', 'Warning', and 'Info' states. Message and detail are optional, but recommended to inform the user."
      }
    }
  )
  .add(
    "Typical",
    () => {
      return (
        <Grid>
          <Status
            isBlock={false}
            statusType="indeterminate"
            message="Initiating Self-Destruct..."
          />
          <Status
            isBlock={false}
            statusType="error"
            message="Emergency Destruction System"
          />
          <Status
            isBlock={false}
            statusType="warning"
            message="Failsafe Warning"
          />
          <Status
            isBlock={false}
            statusType="info"
            message="Scuttle Procedure"
          />

          <Status
            isBlock={false}
            statusType="indeterminate"
            message="Initiating Self-Destruct..."
            detail="Failsafe system will not engage if safety interlocks are disengaged."
          />
          <Status
            isBlock={false}
            statusType="error"
            message="Emergency Destruction System"
            detail="On activation ship will detonate in t-minus 10 minutes."
          />
          <Status
            isBlock={false}
            statusType="warning"
            message="Failsafe Warning"
            detail="Cut-off system will not operate after T minus 5 minutes."
          />
          <Status
            isBlock={false}
            statusType="info"
            message="Scuttle Procedure"
            detail="Input NUCLEAR BOLD CODE no. 1.
          Verify BOLD CLAMP release."
          />

          <Status
            isBlock={true}
            statusType="indeterminate"
            message="Initiating Self-Destruct..."
          />
          <Status
            isBlock={true}
            statusType="error"
            message="Emergency Destruction System"
          />
          <Status
            isBlock={true}
            statusType="warning"
            message="Failsafe Warning"
          />
          <Status
            isBlock={true}
            statusType="info"
            message="Scuttle Procedure"
          />

          <Status
            isBlock={true}
            statusType="indeterminate"
            message="Initiating Self-Destruct..."
            detail="Failsafe system will not engage if safety interlocks are disengaged."
          />
          <Status
            isBlock={true}
            statusType="error"
            message="Emergency Destruction System"
            detail="On activation ship will detonate in t-minus 10 minutes."
          />
          <Status
            isBlock={true}
            statusType="warning"
            message="Failsafe Warning"
            detail="Cut-off system will not operate after T minus 5 minutes."
          />

          <Status
            isBlock={true}
            statusType="info"
            message="Scuttle Procedure"
            detail="Input NUCLEAR BOLD CODE no. 1.
            Verify BOLD CLAMP release.
            Perform INSERTION of BOLD no. 1 in HOLD no. 1.
            Remove NUCLEAR HEAD.
            Activate PUSH BUTTON INSERTION.
            Replace NUCLEAR HEAD, verify SECURED.
            Verify DETONATION CODE ACTIVATED.
            Repeat for HOLDS 2, 3, & 4."
          />
        </Grid>
      );
    },
    {
      info: {
        text:
          "Indicates the status of a content area. Provides text style and graphics for 'Indeterimate', 'Error', 'Warning', and 'Info' states. Message and detail are optional, but recommended to inform the user."
      }
    }
  );
