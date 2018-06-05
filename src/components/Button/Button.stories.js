import React from "react";

import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  number,
  select,
  text,
  boolean,
  color
} from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Button from "./Button";

const wrapperStyle = {
  display: "flex",
  width: "100vw",
  justifyContent: "space-around",
  height: "100vh",
  alignItems: "center"
};

const glyphNames = [
  "Bars",
  "Bell",
  "CPU",
  "Card",
  "Cog",
  "Configuration",
  "Docs",
  "EKG",
  "EditGraph",
  "ErrorList",
  "Exclamation",
  "Explorer",
  "Fabric",
  "Finagle",
  "GRPC",
  "GitHub",
  "Http",
  "Info",
  "Instances",
  "JVM",
  "Key",
  "LinkedIn",
  "Memory",
  "Negation",
  "Pause",
  "Person",
  "Play",
  "Poll",
  "Power",
  "Rows",
  "RunningSmall",
  "Scale",
  "Scatterplot",
  "Service",
  "ServiceInstance",
  "ServicesWhite",
  "StarFilled",
  "Summary",
  "Tape",
  "Threads",
  "Timer",
  "ViewCollapse",
  "GET",
  "PUT",
  "POST",
  "DELETE",
  "PATCH"
];

const types = ["default", "danger", "info", "primary", "warning"];
const outlines = ["raised", "outline", "shadow", "none", "raised-outline"];
const sizes = ["normal", "xs", "sm", "lg", "xl"];
const orientations = ["vertical", "horizontal"];

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add(
    "default",
    withInfo(
      "A React component that renders a button and includes base styling, used to trigger actions."
    )(() => (
      <div style={wrapperStyle}>
        <Button
          active={boolean("active", false)}
          label={text("label", "Hello World")}
          type={select("type", types, "default")}
          glyph={select("glyph", glyphNames)}
          glyphColor={color("glyphColor")}
          glyphSize={select("glyphSize", sizes)}
          disabled={boolean("disabled", false)}
          clickAction={() => alert("clicked")}
          orientation={select("orientation", orientations, "horizontal")}
          outline={select("outline", outlines, "none")}
          prefix={text("prefix")}
          suffix={text("suffix")}
          size={select("size", sizes, "normal")}
          tabIndex={number("tabIndex", 0)}
        />
      </div>
    ))
  )
  .add("types", () => (
    <div style={wrapperStyle}>
      {types.map(type => (
        <Button
          type={type}
          label={type}
          key={type}
          outline="raised"
          clickAction={() => {}}
        />
      ))}
    </div>
  ))
  .add("sizes", () => (
    <div style={wrapperStyle}>
      {sizes.map(size => (
        <Button size={size} label={size} key={size} clickAction={() => {}} />
      ))}
    </div>
  ))
  .add("outlines", () => (
    <div style={wrapperStyle}>
      {outlines.map(outline => (
        <Button
          outline={outline}
          label={outline}
          key={outline}
          clickAction={() => {}}
        />
      ))}
    </div>
  ))
  .add("orientations", () => (
    <div style={wrapperStyle}>
      {orientations.map(orientation => (
        <Button
          glyph={"Bell"}
          orientation={orientation}
          label={orientation}
          clickAction={() => {}}
          key={orientation}
        />
      ))}
    </div>
  ));
