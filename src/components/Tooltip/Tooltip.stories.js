import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  select,
  boolean,
  object
} from "@storybook/addon-knobs/react";

import Tooltip from "./Tooltip";

const wrapperStyle = {
  display: "flex",
  width: "100vw",
  justifyContent: "center",
  height: "100vh",
  alignItems: "center"
};

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
      <div style={wrapperStyle}>
        <Tooltip
          content={content}
          position={position}
          hideTooltip={boolean("hideTooltip", false)}
          containerStyle={object("containerStyle", {})}
        >
          Hover over me
        </Tooltip>
      </div>
    );
  });
