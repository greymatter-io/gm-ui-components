import React from "react";
import { storiesOf } from "@storybook/react";
import { color, text, boolean } from "@storybook/addon-knobs";
import styled from "styled-components";

import ToggleSwitch from "./ToggleSwitch";

const Wrap = styled.div`
  margin-bottom: 10px;
`;

const stories = storiesOf("Components|ToggleSwitch", module);

stories
  .add(
    "Default",
    () => {
      return (
        <div style={{ fontSize: text("Context Font Size", "1em") }}>
          <ToggleSwitch
            color={color("color")}
            offInnerLabel={text("offInnerLabel")}
            onInnerLabel={text("onInnerLabel")}
            disabled={boolean("disabled")}
          />
        </div>
      );
    },
    {
      info: {
        text: "Add component description here. Accepts markdown."
      }
    }
  )
  .add(
    "Sizes",
    () => {
      return (
        <>
          <Wrap style={{ fontSize: "0.5em" }}>
            <ToggleSwitch
              color={color("color")}
              offInnerLabel={text("offInnerLabel")}
              onInnerLabel={text("onInnerLabel")}
              disabled={boolean("disabled")}
            />
          </Wrap>
          <Wrap>
            <ToggleSwitch
              color={color("color")}
              offInnerLabel={text("offInnerLabel")}
              onInnerLabel={text("onInnerLabel")}
              disabled={boolean("disabled")}
            />
          </Wrap>
          <Wrap style={{ fontSize: "2em" }}>
            <ToggleSwitch
              color={color("color")}
              offInnerLabel={text("offInnerLabel", "0")}
              onInnerLabel={text("onInnerLabel", "1")}
              disabled={boolean("disabled")}
            />
          </Wrap>
          <Wrap style={{ fontSize: "4em" }}>
            <ToggleSwitch
              color={color("color")}
              offInnerLabel={text("offInnerLabel", "0")}
              onInnerLabel={text("onInnerLabel", "1")}
              disabled={boolean("disabled")}
            />
          </Wrap>
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
    "Typical",
    () => {
      return (
        <div style={{ fontSize: text("Context Font Size", "1em") }}>
          <ToggleSwitch
            style={{ fontSize: "1.5em" }}
            color={color("color")}
            offInnerLabel={text("offInnerLabel", "off")}
            onInnerLabel={text("onInnerLabel", "on")}
            disabled={boolean("disabled")}
          />
        </div>
      );
    },
    {
      info: {
        text: "Add component description here. Accepts markdown."
      }
    }
  );
