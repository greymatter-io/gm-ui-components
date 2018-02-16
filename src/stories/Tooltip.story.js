import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs/react";
import StorybookWrap from "./utils/StorybookWrap";

import { Tooltip } from "../components";

storiesOf("Tooltip", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    let content = text("Tooltip Content", "This is a super cool tooltip!");
    let position = select(
      "Position",
      ["top", "right", "bottom", "left"],
      "top"
    );
    return (
      <StorybookWrap storyTheme={select("Theme", ['decipher', 'decipherDark'])}>
        <Tooltip content={content} position={position}>
          Hover over me
        </Tooltip>
      </StorybookWrap>
    );
  });
