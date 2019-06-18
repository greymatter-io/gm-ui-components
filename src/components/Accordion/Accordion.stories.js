import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";

import Accordion from "./Accordion";

const stories = storiesOf("Components|Accordion", module);

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
      <Accordion title="Accordion Title" detail="Detail text">
        <div style={style}>Accordion content</div>
      </Accordion>
    );
  },
  {
    info: {
      text: "Add component description here. Accepts markdown."
    }
  }
);
