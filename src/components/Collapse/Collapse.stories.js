import React from "react";

import { text, boolean } from "@storybook/addon-knobs";

import Collapse from "./Collapse";

export default { title: "Components|Collapse", component: Collapse };

const style = {
  height: "300px",
  width: "100%",
  textAlign: "center",
  backgroundColor: "lightgrey"
};
const wrapperStyle = { minWidth: "500px" };

export const defaultStory = () => {
  return (
    <>
      <Collapse
        title="Collapse Title"
        detail="Detail text"
        style={wrapperStyle}
      >
        <div style={style}>Collapse content</div>
      </Collapse>
    </>
  );
};

defaultStory.story = {
  name: "default",

  parameters: {
    info: {
      text: "A single collapse section that is uncontrolled."
    }
  }
};

export const controlled = () => {
  return (
    <Collapse
      title={text("title", "Collapse Title")}
      detail={text("detail", "Detail text")}
      isOpen={boolean("isOpen", true)}
      style={wrapperStyle}
    >
      <div style={style}>Collapse content</div>
    </Collapse>
  );
};

controlled.story = {
  parameters: {
    info: {
      text:
        "A single collapse section controlled using the isOpen and onClick props. Both isOpen and onClick are required when using Collapse as a controlled component."
    }
  }
};

export const multiple = () => {
  return (
    <>
      <Collapse
        title="Collapse Title"
        detail="Detail text"
        style={wrapperStyle}
      >
        <div style={style}>Collapse content</div>
      </Collapse>
      <Collapse
        title="Collapse Title"
        detail="Detail text"
        style={wrapperStyle}
      >
        <div style={style}>Collapse content</div>
      </Collapse>
      <Collapse
        title="Collapse Title"
        detail="Detail text"
        style={wrapperStyle}
      >
        <div style={style}>Collapse content</div>
      </Collapse>
    </>
  );
};

multiple.story = {
  parameters: {
    info: {
      text: "A collection of collapse sections."
    }
  }
};

export const nested = () => {
  return (
    <Collapse
      title={"Nested Collapse"}
      detail={"Detail text"}
      style={wrapperStyle}
    >
      <Collapse title={"Child Collapse"} detail={"Detail text"}>
        <div style={style}>Collapse content</div>
      </Collapse>
      <Collapse title={"Child Collapse"} detail={"Detail text"}>
        <div style={style}>Collapse content</div>
      </Collapse>
      <Collapse title={"Child Collapse"} detail={"Detail text"}>
        <div style={style}>Collapse content</div>
      </Collapse>
    </Collapse>
  );
};

nested.story = {
  parameters: {
    info: {
      text: "A collapse section with nested collapse sections inside."
    }
  }
};
