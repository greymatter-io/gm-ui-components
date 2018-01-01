import React from "react";

import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  number,
  select,
  text,
  boolean,
  color
} from "@storybook/addon-knobs";
import { Button } from "../components";

console.log(Button);
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

const types = ["danger", "info", "primary", "warning", "polling"];
const outlines = ["raised", "outline", "shadow", "none", "raised-outline"];
const sizes = ["normal", "xs", "sm", "lg", "xl"];
const orientations = ["vertical", "horizontal"];

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <div style={wrapperStyle}>
      <Button
        active={boolean("active", false)}
        label={text("label", "Hello World")}
        type={select("type", types)}
        glyph={select("glyph", glyphNames)}
        glyphColor={color("glyphColor")}
        glyphRatio={number("glyphRatio", 1)}
        disabled={boolean("disabled", false)}
        clickAction={() => alert("clicked")}
        orientation={select("orientation", orientations, "horizontal")}
        outline={select("outline", outlines, "none")}
        prefix={text("prefix")}
        suffix={text("suffix")}
        size={select("size", sizes, "normal")}
        tabIndex={number("tabIndex")}
      />
    </div>
  ))
  .add("types", () => (
    <div style={wrapperStyle}>
      {types.map(type => (
        <Button type={type} label={type} key={type} clickAction={() => {}} />
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
