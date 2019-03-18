import React from "react";

import { storiesOf } from "@storybook/react";
import { number, select, text, boolean } from "@storybook/addon-knobs";

import { IconBell } from "components/Glyphs";
import Button from "./Button";

const stories = storiesOf("Components|Buttons", module);

const types = ["default", "danger", "info", "primary", "warning"];
const sizes = ["normal", "xs", "sm", "lg", "xl"];
const orientations = ["vertical", "horizontal"];

stories
  .add(
    "Button",
    () => (
      <Button
        active={boolean("active", false)}
        label={text("label", "Hello World")}
        type={select("type", types, "default")}
        disabled={boolean("disabled", false)}
        clickAction={() => alert("clicked")}
        orientation={select("orientation", orientations, "horizontal")}
        outline={boolean("outline", false)}
        prefix={text("prefix")}
        suffix={text("suffix")}
        size={select("size", sizes, "normal")}
        tabIndex={number("tabIndex", 0)}
      />
    ),
    {
      info: {
        text:
          "A React component that renders a button and includes base styling, used to trigger actions."
      }
    }
  )
  .add(
    "Button Types",
    () => (
      <React.Fragment>
        {types.map(type => (
          <Button type={type} label={type} key={type} clickAction={() => {}} />
        ))}
      </React.Fragment>
    ),
    {
      info: {
        text: "Demonstrating Button types."
      }
    }
  )
  .add(
    "Button Sizes",
    () => (
      <React.Fragment>
        {sizes.map(size => (
          <Button size={size} label={size} key={size} clickAction={() => {}} />
        ))}
      </React.Fragment>
    ),
    {
      info: {
        text: "Demonstrating Button sizes."
      }
    }
  )
  .add(
    "Button Orientations",
    () => (
      <React.Fragment>
        {orientations.map(orientation => (
          <Button
            orientation={orientation}
            label={orientation}
            clickAction={() => {}}
            key={orientation}
          >
            <IconBell size="25px" />
          </Button>
        ))}
      </React.Fragment>
    ),
    {
      info: {
        text: "Demonstrating Button orientations."
      }
    }
  );
