import React from "react";
import { storiesOf } from "@storybook/react";
import { color, text, boolean, select } from "@storybook/addon-knobs";
import styled, { css } from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";
import ToggleSwitch from "./ToggleSwitch";

const Wrap = styled.div`
  margin-bottom: 10px;
`;

const stories = storiesOf("Components|ToggleSwitch", module);

const labelPositionOptions = ["top", "left", "right", "bottom"];

const TypicalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    padding-top: ${spacingScale(1)};
    padding-bottom: ${spacingScale(1)};
    border-top: 1px solid ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
  }
`;

stories
  .add(
    "Default",
    () => {
      return (
        <div style={{ fontSize: text("Context Font Size", "") }}>
          <ToggleSwitch
            color={color("color")}
            offInnerLabel={text("offInnerLabel")}
            onInnerLabel={text("onInnerLabel")}
            disabled={boolean("disabled")}
            label={text("label", "Toggle Switch Label")}
            labelPosition={select("labelPosition", labelPositionOptions)}
          />
        </div>
      );
    },
    {
      info: {
        text:
          "A toggle switch for user controls that have immediate results. See https://www.nngroup.com/articles/toggle-switch-guidelines/ for details on when to use ToggleSwitches instead of checkboxes."
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
              offInnerLabel={text("offInnerLabel", "off")}
              onInnerLabel={text("onInnerLabel", "on")}
              disabled={boolean("disabled")}
              label="With 0.5em wrapper"
              labelPosition={select(
                "labelPosition",
                labelPositionOptions,
                "right"
              )}
            />
          </Wrap>
          <Wrap>
            <ToggleSwitch
              color={color("color")}
              offInnerLabel={text("offInnerLabel", "off")}
              onInnerLabel={text("onInnerLabel", "on")}
              disabled={boolean("disabled")}
              label="Default size"
              labelPosition={select(
                "labelPosition",
                labelPositionOptions,
                "right"
              )}
            />
          </Wrap>
          <Wrap style={{ fontSize: "2em" }}>
            <ToggleSwitch
              color={color("color")}
              offInnerLabel={text("offInnerLabel", "off")}
              onInnerLabel={text("onInnerLabel", "on")}
              disabled={boolean("disabled")}
              label="With 2em wrapper"
              labelPosition={select(
                "labelPosition",
                labelPositionOptions,
                "right"
              )}
            />
          </Wrap>
        </>
      );
    },
    {
      info: {
        text:
          "Toggle Switches inherit the font size of their container. Note: Form labels do not inherit the size of their container."
      }
    }
  )
  .add(
    "Typical",
    () => {
      return (
        <TypicalWrapper>
          <ToggleSwitch
            label={text("label", "Toggle Switch Label")}
            color={keen.COLOR_INTENT_DANGER}
          />
          <ToggleSwitch
            color={color("color")}
            offInnerLabel={text("offInnerLabel", "")}
            onInnerLabel={text("onInnerLabel", "")}
            disabled={boolean("disabled")}
            label={text("label", "Toggle Switch Label")}
            labelPosition={select(
              "labelPosition",
              labelPositionOptions,
              "right"
            )}
          />
          <ToggleSwitch
            color={color("color")}
            offInnerLabel={text("offInnerLabel", "")}
            onInnerLabel={text("onInnerLabel", "")}
            disabled={boolean("disabled")}
            label={text("label", "Toggle Switch Label")}
            labelPosition={select(
              "labelPosition",
              labelPositionOptions,
              "right"
            )}
          />
        </TypicalWrapper>
      );
    },
    {
      info: {
        text:
          "Toggle switches in a list of controls, where one causes a dangerous action."
      }
    }
  );
