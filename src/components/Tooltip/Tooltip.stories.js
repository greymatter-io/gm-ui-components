import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, boolean, object } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Tooltip from "./Tooltip";

const stories = storiesOf("Components", module);

stories.add(
  "Tooltip",
  withInfo("A tooltip form input with a label.")(() => {
    let content = text("Tooltip Content", "This is a super cool tooltip!");
    let position = select(
      "Position",
      ["top", "right", "bottom", "left"],
      "top"
    );
    return (
      <Tooltip
        content={content}
        position={position}
        hideTooltip={boolean("hideTooltip", false)}
        tooltipStyle={object("tooltipStyle", {})}
      >
        {text("children", "Hover over me")}
      </Tooltip>
    );
  })
);
