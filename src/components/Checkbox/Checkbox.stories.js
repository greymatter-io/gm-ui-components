import React from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";

import Checkbox from "./Checkbox";
import { spacingScale } from "style/styleFunctions";

const stories = storiesOf("Components|Checkbox", module);

const CheckboxGrid = styled.div`
  display: grid;
  grid-auto-flow: columns;
  justify-content: stretch;
  grid-gap: ${spacingScale(1)};
`;

stories
  .add(
    "Default",
    () => {
      return (
        <Checkbox
          defaultChecked={boolean("defaultChecked")}
          disabled={boolean("disabled")}
          label={text("label")}
          labelPosition={select("labelPosition", [
            "top",
            "bottom",
            "left",
            "right"
          ])}
          onChange={e => {
            alert("checked: " + e.target.checked);
          }}
        />
      );
    },
    {
      info: {
        text: "A checkbox form input with a label."
      }
    }
  )
  .add(
    "Typical",
    () => {
      return (
        <CheckboxGrid>
          <Checkbox defaultChecked={true} label="Fermions" />
          <Checkbox defaultChecked={true} label="Plektons" />
          <Checkbox label="Goldston Boson" />
          <Checkbox label="Geon" />
        </CheckboxGrid>
      );
    },
    {
      info: {
        text: "A checkbox form input with a label."
      }
    }
  )
  .add(
    "Controlled",
    () => {
      return (
          <Checkbox
            label="Controlled checkbox"
            checked={boolean("checked")}
            onChange={e => {
              alert("checked: " + e.target.checked);
            }}
          />
      );
    },
    {
      info: {
        text: "A checkbox form input with a label."
      }
    }
  );
