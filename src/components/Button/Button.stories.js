/* eslint react/prop-types: 0 */
import React from "react";

import { number, select, text, color, boolean } from "@storybook/addon-knobs";
import withPropsCombinations from "react-storybook-addon-props-combinations";

import { IconBell } from "components/Glyphs";
import Button from "./Button";
import copy from "copy-to-clipboard";
import Tooltip from "components/Tooltip";

// const stories = storiesOf('Components|Buttons', module);

const ButtonPropsTypes = ["default", "danger", "info", "primary", "warning"];
const ButtonPropsSizes = ["xs", "sm", "normal", "lg", "xl"];
const ButtonPropsOrientations = ["vertical", "horizontal"];

export default { title: "Components|Button", component: Button };

export const defaultStory = () => {
  return (
    <Button
      active={boolean("active")}
      label={text("label", "Hello World")}
      dangerouslySetColor={color("dangerouslySetColor")}
      type={select("type", ButtonPropsTypes, "default")}
      disabled={boolean("disabled", false)}
      clickAction={() => alert("clicked")}
      orientation={select("orientation", ButtonPropsOrientations, "horizontal")}
      outline={boolean("outline", false)}
      size={select("size", ButtonPropsSizes, "normal")}
      tabIndex={number("tabIndex")}
    />
  );
};

defaultStory.story = {
  name: "Default",

  parameters: {
    info: {
      text:
        "A React component that renders a button and includes base styling, used to trigger actions."
    }
  }
};

export const propsGallery = withPropsCombinations(
  Button,
  {
    type: ButtonPropsTypes,
    active: [false, true],
    outline: [false, true],
    disabled: [false, true],
    size: ButtonPropsSizes,
    label: ["Label"]
  },
  {
    showSource: false,
    style: {
      float: "left",
      margin: "0.25rem"
    },
    CombinationRenderer: ({ Component, props, options }) => {
      const prettyJSON = JSON.stringify(props)
        .split(",")
        .join("\n");
      return (
        <Tooltip content={prettyJSON}>
          <Component
            {...props}
            title="Click to copy props"
            style={options.style}
            onClick={() => copy(JSON.stringify(props))}
          />
        </Tooltip>
      );
    }
  }
);

propsGallery.story = {
  name: "Props Gallery",

  parameters: {
    info: {
      text:
        "All Button types, active states, disabled states, sizes, and outline states."
    }
  }
};

export const types = () => (
  <React.Fragment>
    {ButtonPropsTypes.map(type => (
      <Button type={type} label={type} key={type} clickAction={() => {}} />
    ))}
  </React.Fragment>
);

types.story = {
  name: "Types",

  parameters: {
    info: {
      text: "Demonstrating Button types."
    }
  }
};

export const sizes = () => (
  <React.Fragment>
    {ButtonPropsSizes.map(size => (
      <Button size={size} label={size} key={size} clickAction={() => {}} />
    ))}
  </React.Fragment>
);

sizes.story = {
  name: "Sizes",

  parameters: {
    info: {
      text: "Demonstrating Button sizes."
    }
  }
};

export const orientations = () => (
  <React.Fragment>
    {ButtonPropsOrientations.map(orientation => (
      <Button
        orientation={orientation}
        label={orientation}
        clickAction={() => {}}
        key={orientation}
      >
        <IconBell />
      </Button>
    ))}
  </React.Fragment>
);

orientations.story = {
  name: "Orientations",

  parameters: {
    info: {
      text: "Demonstrating Button orientations."
    }
  }
};
