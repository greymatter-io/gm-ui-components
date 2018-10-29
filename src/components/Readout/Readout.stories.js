import React from "react";
import { IconSummary } from "../";

import { storiesOf } from "@storybook/react";
import { boolean, object } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import ReadoutGroup from "../ReadoutGroup/ReadoutGroup";
import Readout from "./Readout";

const stories = storiesOf("Components|Readout", module);

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

stories
  .add(
    "Readout",
    withInfo("A generalized display component for key performance indicators.")(
      () => {
        return (
          <Readout
            primary={boolean("primary", false)}
            readoutItems={object("readoutItems", mockReadoutItem)}
          />
        );
      }
    )
  )
  .add(
    "A Readout with Many Items ",
    withInfo("Readouts may display many related values.")(() => {
      return (
        <Readout
          primary={boolean("primary", false)}
          readoutItems={object("readoutItems", mockReadoutManyItems)}
        />
      );
    })
  )
  .add(
    "A Readout Group",
    withInfo("Readouts may be grouped into a dashboard-like Readout Group.")(
      () => {
        return (
          <ReadoutGroup>
            <Readout readoutItems={mockReadoutItem} />
            <Readout primary={true} readoutItems={mockReadoutItem} />
            <Readout readoutItems={mockReadoutItem} />
          </ReadoutGroup>
        );
      }
    )
  );
