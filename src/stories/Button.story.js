import React from "react";

import { storiesOf } from "@storybook/react";

import { Button } from "../components";

const stories = storiesOf("Button", module);

const wrapperStyle = {
  background: "#ddd",
  padding: "2vw",
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%"
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
  alignItems: "flex-start",
  height: "40vh",
  width: "50vw",
  background: "lightblue",
  justifyContent: "space-between"
};

stories.add("types", () => {
  return (
    <div style={wrapperStyle}>
      <h1>Button Types</h1>
      <div style={flexParentStyle}>
        <div>
          <Button onClick={() => console.log("Primary!")}>Primary</Button>
        </div>
        <div>
          <Button type="warning" onClick={() => console.log("Warning!")}>
            Warning
          </Button>
        </div>
        <div>
          <Button type="info" onClick={() => console.log("Info!")}>
            Info
          </Button>
        </div>
        <div>
          <Button type="danger" onClick={() => console.log("Danger!")}>
            Danger
          </Button>
        </div>
      </div>
    </div>
  );
});

stories.add("sizes", () => {
  return (
    <div style={wrapperStyle}>
      <h1>Button Sizes</h1>
      <div style={flexColumn}>
        <Button size="xs" onClick={() => console.log("Primary xs!")}>
          Primary xs
        </Button>
        <Button size="sm" onClick={() => console.log("Primary sm!")}>
          Primary sm
        </Button>
        <Button size="md" onClick={() => console.log("Primary md!")}>
          Primary md
        </Button>
        <Button size="lg" onClick={() => console.log("Primary lg!")}>
          Primary lg
        </Button>
        <Button size="fit" onClick={() => console.log("Primary lg!")}>
          Primary fit (expands to fit its container)
        </Button>
      </div>
    </div>
  );
});
