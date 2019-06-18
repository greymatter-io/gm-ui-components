import React from "react";
import { storiesOf } from "@storybook/react";

import Collapse from "./Collapse";

const stories = storiesOf("Components|Collapse", module);

const style = {
  height: "300px",
  width: "100%",
  textAlign: "center",
  backgroundColor: "lightgrey"
};

stories.add(
  "default",
  () => {
    return (
      <>
        <Collapse title="Collapse Title" detail="Detail text">
          <div style={style}>Collapse content</div>
        </Collapse>{" "}
        <Collapse title="Collapse Title" detail="Detail text">
          <div style={style}>Collapse content</div>
        </Collapse>{" "}
        <Collapse title="Collapse Title" detail="Detail text">
          <div style={style}>Collapse content</div>
        </Collapse>
      </>
    );
  },
  {
    info: {
      text: "Add component description here. Accepts markdown."
    }
  }
);
