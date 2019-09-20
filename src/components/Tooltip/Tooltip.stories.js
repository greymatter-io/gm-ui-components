import React from "react";
import { text, select, boolean, object } from "@storybook/addon-knobs";

import Tooltip from "./Tooltip";

export default { title: "Tooltip", component: Tooltip };

export const defaultStory = () => {
  return (
    <Tooltip
      content={text("content", "Content")}
      position={select("position", ["bottom", "right", "top", "left"])}
      hideTooltip={boolean("hideTooltip")}
      tooltipStyle={object("tooltipStyle")}
    >
      {text("children", "Hover over me")}
    </Tooltip>
  );
};

defaultStory.story = {
  name: "Default",

  parameters: {
    info: {
      text: "A tooltip form input with a label."
    }
  }
};

export const typical = () => {
  return (
    <Tooltip
      content={text("content", "Lorem ipsum dolor sit amet")}
      position={select("position", ["bottom", "right", "top", "left"])}
      hideTooltip={boolean("hideTooltip")}
      tooltipStyle={object("tooltipStyle")}
    >
      {text("children", "Hover over me")}
    </Tooltip>
  );
};

typical.story = {
  name: "Typical",

  parameters: {
    info: {
      text: "A tooltip form input with a label."
    }
  }
};

export const longerContent = () => {
  return (
    <Tooltip
      content={text(
        "content",
        "Lorem ipsum dolor sit amet donec consectatur adispacing"
      )}
      position={select("position", ["top", "right", "bottom", "left"])}
      hideTooltip={boolean("hideTooltip")}
      tooltipStyle={object("tooltipStyle")}
    >
      {text("children", "Hover over me")}
    </Tooltip>
  );
};

longerContent.story = {
  name: "Longer content",

  parameters: {
    info: {
      text: "A tooltip form input with a label."
    }
  }
};
