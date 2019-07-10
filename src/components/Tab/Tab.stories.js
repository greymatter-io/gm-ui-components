import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";

import Tab from "./Tab";

const stories = storiesOf("Components|Tabs", module);

stories
  .add(
    "Default",
    () => {
      return (
        <Tab
          clickAction={() => alert("hello")}
          label={text("label", "label")}
          active={boolean("active", true)}
          disabled={boolean("disabled")}
        />
      );
    },
    {
      info: {
        text:
          "An individual Tab component that is meant to be used as a child of TabGroup."
      }
    }
  )
  .add(
    "Typical",
    () => {
      return (
        <Tab
          clickAction={() => alert("hello")}
          label={text("label", "Filters")}
          active={boolean("active", false)}
          disabled={boolean("disabled", false)}
        />
      );
    },
    {
      info: {
        text:
          "An individual Tab component that is meant to be used as a child of TabGroup."
      }
    }
  );
