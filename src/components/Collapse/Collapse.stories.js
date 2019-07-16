import React from "react";
import { storiesOf } from "@storybook/react";

import { text, boolean } from "@storybook/addon-knobs";

import Collapse from "./Collapse";

const stories = storiesOf("Components|Collapse", module);

const style = {
  height: "300px",
  width: "100%",
  textAlign: "center",
  backgroundColor: "lightgrey"
};
const wrapperStyle = { minWidth: "500px" };
stories
  .add(
    "default",
    () => {
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
    },
    {
      info: {
        text: "A single collapse section that is uncontrolled."
      }
    }
  )
  .add(
    "controlled",
    () => {
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
    },
    {
      info: {
        text:
          "A single collapse section controlled using the isOpen and onClick props. Both isOpen and onClick are required when using Collapse as a controlled component."
      }
    }
  )
  .add(
    "multiple",
    () => {
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
    },
    {
      info: {
        text: "A collection of collapse sections."
      }
    }
  )
  .add(
    "nested",
    () => {
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
    },
    {
      info: {
        text: "A collapse section with nested collapse sections inside."
      }
    }
  );
