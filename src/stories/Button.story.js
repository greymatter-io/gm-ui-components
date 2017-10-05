import React from "react";

import { storiesOf } from "@storybook/react";

import { Button } from "../components";

const stories = storiesOf("Button", module);

const wrapperStyle = {
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
  minHeight: "24px",
  alignItems: "flex-start",
  height: "300px",
  width: "50vw",
  background: "#eee",
  justifyContent: "space-between"
};

stories.add("types", () => {
  return (
    <div style={wrapperStyle}>
      <h1>Button Types</h1>
      <div style={flexParentStyle}>
        <div>
          <Button onClick={() => alert("Primary!")}>Primary</Button>
        </div>
        <div>
          <Button type="warning" onClick={() => alert("Warning!")}>
            Warning
          </Button>
        </div>
        <div>
          <Button type="info" onClick={() => alert("Info!")}>
            Info
          </Button>
        </div>
        <div>
          <Button type="danger" onClick={() => alert("Danger!")}>
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
});
