import React from "react";
import { storiesOf } from "@storybook/react";
import { array, boolean, text, color } from "@storybook/addon-knobs";
import Badge from "./Badge";

const stories = storiesOf("Components|Badge", module);

stories
  .add(
    "Default",
    () => {
      return (
        <Badge color={color("blue")}>{text("label", "Hello World")}</Badge>
      );
    },
    {}
  )
  .add(
    "With limited container size",
    () => {
      return (
        <div
          style={{
            width: "350px",
            border: "1px solid #ddd",
            padding: "4px",
            borderRadius: "2px"
          }}
        >
          <Badge color={color("blue")}>{text("label", "Hello World")}</Badge>
        </div>
      );
    },
    {}
  );
