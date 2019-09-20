import React from "react";
import styled from "styled-components";

import { text, select, boolean } from "@storybook/addon-knobs";

import Checkbox from "./Checkbox";
import { spacingScale } from "style/styleFunctions";

export default { title: "Components|Checkbox", component: Checkbox };

const CheckboxGrid = styled.div`
  display: grid;
  grid-auto-flow: columns;
  justify-content: stretch;
  grid-gap: ${spacingScale(1)};
`;

export const defaultStory = () => {
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
};

defaultStory.story = {
  name: "Default",

  parameters: {
    info: {
      text: "A checkbox form input with a label."
    }
  }
};

export const typical = () => {
  return (
    <CheckboxGrid>
      <Checkbox defaultChecked={true} label="Fermions" />
      <Checkbox defaultChecked={true} label="Plektons" />
      <Checkbox label="Goldston Boson" />
      <Checkbox label="Geon" />
    </CheckboxGrid>
  );
};

typical.story = {
  name: "Typical",

  parameters: {
    info: {
      text: "A checkbox form input with a label."
    }
  }
};

export const controlled = () => {
  return (
    <Checkbox
      label="Controlled checkbox"
      checked={boolean("checked")}
      onChange={e => {
        alert("checked: " + e.target.checked);
      }}
    />
  );
};

controlled.story = {
  name: "Controlled",

  parameters: {
    info: {
      text: "A checkbox form input with a label."
    }
  }
};
