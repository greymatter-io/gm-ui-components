import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, boolean, object } from "@storybook/addon-knobs";

import Tooltip from "./Tooltip";

const stories = storiesOf("Components|Tooltip", module);

stories.add(
  "default",
  () => {
    let content = text("content", "This is a super cool tooltip!");
    let position = select(
      "position",
      ["top", "right", "bottom", "left"],
      "right"
    );
    return (
      <div style={{ textAlign: "center" }}>
        <Tooltip
          content={content}
          position={position}
          hideTooltip={boolean("hideTooltip", false)}
          tooltipStyle={object("tooltipStyle", {})}
        >
          {text("children", "Hover over me")}
        </Tooltip>
      </div>
    );
  },
  {
    info: {
      text: "A tooltip form input with a label."
    }
  }
);
