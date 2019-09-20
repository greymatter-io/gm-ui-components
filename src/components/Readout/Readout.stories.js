import React from "react";
import { IconSummary } from "..";

import { boolean, object, color } from "@storybook/addon-knobs";

import ReadoutGroup from "../ReadoutGroup/ReadoutGroup";
import Readout from "./Readout";

export default { title: "Readout", component: Readout };

const mockReadoutItem = [
  {
    icon: () => <IconSummary />,
    title: "Avg. Response Time",
    value: "30000%"
  }
];

const mockReadoutManyItems = [
  {
    icon: () => <IconSummary />,
    title: "Avg. Response Time",
    value: "30000%",
    detail: "detail text 0"
  },
  {
    icon: () => <IconSummary />,
    title: "Avg. Response Time",
    value: "33000%",
    detail: "detail text 1 "
  },
  {
    icon: () => <IconSummary />,
    title: "Avg. Response Time",
    value: "31000%",
    detail: "detail text 2"
  },
  {
    icon: () => <IconSummary />,
    title: "Avg. Response Time",
    value: "34000%",
    detail: "detail text 3"
  }
];

export const typical = () => {
  return (
    <Readout
      color={color("color", "#eee")}
      primary={boolean("primary", false)}
      readoutItems={object("readoutItems", mockReadoutItem)}
    />
  );
};

typical.story = {
  name: "Typical",

  parameters: {
    info: {
      text: "A generalized display component for key performance indicators."
    }
  }
};

export const withManyItems = () => {
  return (
    <Readout
      color={color("color", "#eee")}
      primary={boolean("primary", false)}
      readoutItems={object("readoutItems", mockReadoutManyItems)}
    />
  );
};

withManyItems.story = {
  name: "With Many Items ",

  parameters: {
    info: {
      text: "Readouts may display many related values."
    }
  }
};

export const readoutGroup = () => {
  return (
    <ReadoutGroup>
      <Readout readoutItems={mockReadoutItem} />
      <Readout primary={true} readoutItems={mockReadoutItem} />
      <Readout readoutItems={mockReadoutItem} />
    </ReadoutGroup>
  );
};

readoutGroup.story = {
  name: "Readout Group",

  parameters: {
    info: {
      text: "Readouts may be grouped into a dashboard-like Readout Group."
    }
  }
};
