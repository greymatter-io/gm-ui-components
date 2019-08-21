import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, select, number } from "@storybook/addon-knobs";
import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";

import Status from "./Status";

const stories = storiesOf("Components|Status", module);

const statusOptions = ["indeterminate", "error", "info", "warning", "progress"];

const progressSliderOptions = {
  range: true,
  min: 0,
  max: 1,
  step: 0.01
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: ${({ theme }) => theme.COLOR_BACKGROUND_TWO};
  padding: ${spacingScale(4)};

  > * {
    margin: 0.5rem;
    background: #fff;
    color: ${keen.COLOR_CONTENT_DEFAULT};
    border-radius: ${({ theme }) => theme.CORNER_RADIUS_CARD_DEFAULT};
    box-shadow: 0 1px 6px -4px;
  }
`;

stories.add(
  "Default",
  () => {
    return (
      <Status
        isBlock={boolean("isBlock")}
        statusType={select("statusType", statusOptions)}
        progress={number("progress", false, progressSliderOptions)}
        message={text("message", "Hey dude")}
        detail={text("detail", "Chill out")}
      />
    );
  },
  {
    info: {
      text: "Add component description here. Accepts markdown."
    }
  }
).add(
  "Examples",
  () => {
    return (
      <Grid>
        <Status
          isBlock={false}
          statusType="indeterminate"
          message={text("message", "Hey dude")}
        />
        <Status
          isBlock={false}
          statusType="error"
          message={text("message", "Hey dude")}
        />
        <Status
          isBlock={false}
          statusType="warning"
          message={text("message", "Hey dude")}
        />
        <Status
          isBlock={false}
          statusType="info"
          message={text("message", "Hey dude")}
        />
        <Status
          isBlock={false}
          statusType="indeterminate"
          message={text("message", "Hey dude")}
          detail={text("detail", "Chill out")}
        />
        <Status
          isBlock={false}
          statusType="error"
          message={text("message", "Hey dude")}
          detail={text("detail", "Chill out")}
        />
        <Status
          isBlock={false}
          statusType="warning"
          message={text("message", "Hey dude")}
          detail={text("detail", "Chill out")}
        />
        <Status
          isBlock={false}
          statusType="info"
          message={text("message", "Hey dude")}
          detail={text("detail", "Chill out")}
        />
        <Status
          isBlock={true}
          statusType="indeterminate"
          message={text("message", "Hey dude")}
        />
        <Status
          isBlock={true}
          statusType="error"
          message={text("message", "Hey dude")}
        />
        <Status
          isBlock={true}
          statusType="warning"
          message={text("message", "Hey dude")}
        />
        <Status
          isBlock={true}
          statusType="info"
          message={text("message", "Hey dude")}
        />
        <Status
          isBlock={true}
          statusType="indeterminate"
          message={text("message", "Hey dude")}
          detail={text("detail", "Chill out")}
        />
        <Status
          isBlock={true}
          statusType="error"
          message={text("message", "Hey dude")}
          detail={text("detail", "Chill out")}
        />
        <Status
          isBlock={true}
          statusType="warning"
          message={text("message", "Hey dude")}
          detail={text("detail", "Chill out")}
        />
        <Status
          isBlock={true}
          statusType="info"
          message={text("message", "Hey dude")}
          detail={text("detail", "Chill out")}
        />
      </Grid>
    );
  },
  {
    info: {
      text: "Add component description here. Accepts markdown."
    }
  }
);
