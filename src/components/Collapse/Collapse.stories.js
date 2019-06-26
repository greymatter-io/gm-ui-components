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

class Controller extends React.Component {
  state = {
    isOpen: true
  };
  render() {
    return (
      <>
        <Collapse
          title="Collapse Title"
          detail="Detail text"
          isOpen={this.state.isOpen}
          onClick={() => {
            console.log("opened!");
            this.setState({ isOpen: !this.state.isOpen });
          }}
        >
          <div style={style}>Collapse content</div>
        </Collapse>
      </>
    );
  }
}

stories
  .add(
    "default",
    () => {
      return (
        <>
          <Collapse
            title="Collapse Title"
            detail="Detail text"
            initiallyOpen={true}
          >
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
  )
  .add(
    "controlled",
    () => {
      return <Controller />;
    },
    {
      info: {
        text: "Add component description here. Accepts markdown."
      }
    }
  )
  .add(
    "multiple",
    () => {
      return (
        <>
          <Collapse title="Collapse Title" detail="Detail text">
            <div style={style}>Collapse content</div>
          </Collapse>
          <Collapse title="Collapse Title" detail="Detail text">
            <div style={style}>Collapse content</div>
          </Collapse>
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
