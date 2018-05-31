import React from "react";
import { storiesOf } from "@storybook/react";
import { number, select, text, color } from "@storybook/addon-knobs/react";

import ChevronIcon from "../components/ChevronIcon";

storiesOf("ChevronIcon", module).add("default", () => (
  <ChevronIcon
    direction={select("direction", ["up", "down", "left", "right"], "down")}
    width={number("width", 26)}
    height={number("height", 26)}
    viewBox={text("viewBox", "0 0 26 26")}
    stroke={color("stroke", "black")}
    strokeWidth={number("strokeWidth", 1)}
    fill={color("fill", "none")}
    ariaLabelledby={text("ariaLabelledby", "chevron icon")}
    title={text("title", "chevron icon")}
  />
));
