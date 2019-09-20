import React from "react";
import { text, boolean } from "@storybook/addon-knobs";

import Tab from "./Tab";

export default { title: "Components|Tab", component: Tab };

export const defaultStory = () => (
  <Tab
    clickAction={() => alert("hello")}
    label={text("label", "label")}
    active={boolean("active", true)}
    disabled={boolean("disabled")}
    tabIndex="0"
  />
);

defaultStory.story = {
  name: "Default",

  parameters: {
    info: {
      text:
        "An individual Tab component that is meant to be used as a child of TabGroup."
    }
  }
};

export const typical = () => {
  return (
    <Tab
      clickAction={() => alert("hello")}
      label={text("label", "Filters")}
      active={boolean("active", false)}
      disabled={boolean("disabled")}
      tabIndex="0"
    />
  );
};

typical.story = {
  name: "Typical",

  parameters: {
    info: {
      text:
        "An individual Tab component that is meant to be used as a child of TabGroup."
    }
  }
};
