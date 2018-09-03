import React from "react";

import { storiesOf } from "@storybook/react";
import { number, select, text, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import { IconBell } from "components/Glyphs";
import Button from "./Button";

const stories = storiesOf("Components/Buttons", module);

const wrapperStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};

const types = ["default", "danger", "info", "primary", "warning"];
const sizes = ["normal", "xs", "sm", "lg", "xl"];
const orientations = ["vertical", "horizontal"];

stories.add(
  "Button",
  withInfo(
    "A React component that renders a button and includes base styling, used to trigger actions."
  )(() => (
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
  ))
)
.add("Button Types",
withInfo(
  "Demonstrating Button types."
)(() => (
  <React.Fragment>
    {types.map(type => (
      <Button type={type} label={type} key={type} clickAction={() => {}} />
    ))}
  </React.Fragment>
  ))
)
.add("Button Sizes",
withInfo(
  "Demonstrating Button sizes."
)(() => (
  <React.Fragment>
    {sizes.map(size => (
      <Button size={size} label={size} key={size} clickAction={() => {}} />
    ))}
    </React.Fragment>
  ))
)
.add("Button Orientations",
withInfo(
  "Demonstrating Button orientations."
)(() => (
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
  ))
);
