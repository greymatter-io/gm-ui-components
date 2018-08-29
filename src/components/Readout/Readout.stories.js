import React from "react";
import { IconSummary } from "../";

import { storiesOf } from "@storybook/react";
import {
  boolean,
  object,
  color,
  withKnobs
} from "@storybook/addon-knobs/react";

import ReadoutGroup from "../ReadoutGroup/ReadoutGroup";
import Readout from "./Readout";

const mockReadoutItem = [
  {
    icon: () => <IconSummary size={"24px"} />,
    title: "Avg. Response Time",
    value: "30000%"
  }
];

const mockReadoutManyItems = [
  {
    icon: () => <IconSummary size={"24px"} />,
    title: "Avg. Response Time",
    value: "30000%",
    detail: "detail text 0"
  },
  {
    icon: () => <IconSummary size={"24px"} />,
    title: "Avg. Response Time",
    value: "33000%",
    detail: "detail text 1 "
  },
  {
    icon: () => <IconSummary size={"24px"} />,
    title: "Avg. Response Time",
    value: "31000%",
    detail: "detail text 2"
  },
  {
    icon: () => <IconSummary size={"24px"} />,
    title: "Avg. Response Time",
    value: "34000%",
    detail: "detail text 3"
  }
];

storiesOf("Readout", module)
  .addDecorator(withKnobs)
  .add("Readout", () => (
    <Readout
      primary={boolean("primary", false)}
      color={color("color", COLOR_SUCCESS)}
      readoutItems={object("readoutItems", mockReadoutItem)}
    />
  ))
  .add("A Readout with Many Items ", () => (
    <Readout
      primary={boolean("primary", false)}
      color={color("color", COLOR_SUCCESS)}
      readoutItems={object("readoutItems", mockReadoutManyItems)}
    />
  ))
  .add("A Readout Group", () => (
    <ReadoutGroup>
      <Readout readoutItems={mockReadoutItem} />
      <Readout primary={true} readoutItems={mockReadoutItem} />
      <Readout readoutItems={mockReadoutItem} />
    </ReadoutGroup>
  ));
