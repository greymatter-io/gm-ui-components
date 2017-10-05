import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../components";
import { withInfo } from "@storybook/addon-info";

const stories = storiesOf("Button", module);

const wrapperStyle = {
  padding: "2vw",
  position: "absolute",
  top: 0,
  left: 0
};

const flexParentStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignContent: "center",
  height: "30vh",
  width: "50vw"
};

const flexColumn = {
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  minHeight: "24px",
  alignItems: "flex-start",
  height: "300px",
  width: "50vw",
  background: "#eee",
  justifyContent: "space-between"
};

stories.add(
  "appearance",
  withInfo(
    "Use the appearance prop to specify a warning, info, danger, or primary button. Defaults to primary. E.g. <Button appearance='primary'>Text</Button> "
  )(() => {
    return (
      <div style={wrapperStyle}>
        <h1>Button Types</h1>
        <div style={flexParentStyle}>
          <div>
            <Button onClick={() => alert("Primary!")}>Primary</Button>
          </div>
          <div>
            <Button appearance="warning" onClick={() => alert("Warning!")}>
              Warning
            </Button>
          </div>
          <div>
            <Button appearance="info" onClick={() => alert("Info!")}>
              Info
            </Button>
          </div>
          <div>
            <Button appearance="danger" onClick={() => alert("Danger!")}>
              Danger
            </Button>
          </div>
        </div>
      </div>
    );
  })
);

stories.add(
  "size",
  withInfo(
    "Use the size prop to specify the padding of a button. Defaults to medium. E.g. <Button size='md'>Text</Button> "
  )(() => {
    return (
      <div style={wrapperStyle}>
        <h1>Button Sizes</h1>
        <div style={flexColumn}>
          <Button size="xs" onClick={() => alert("Primary xs!")}>
            Primary xs
          </Button>
          <Button size="sm" onClick={() => alert("Primary sm!")}>
            Primary sm
          </Button>
          <Button size="md" onClick={() => alert("Primary md!")}>
            Primary md
          </Button>
          <Button size="lg" onClick={() => alert("Primary lg!")}>
            Primary lg
          </Button>
          <Button size="fit" onClick={() => alert("Primary lg!")}>
            Primary fit (expands to fit its container)
          </Button>
        </div>
      </div>
    );
  })
);
