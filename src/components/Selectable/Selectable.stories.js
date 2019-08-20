import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import styled from "styled-components";

import { selectableStyles } from "./Selectable";

const stories = storiesOf("Components|Selectable", module);

const Component = styled.div`
  ${selectableStyles}
  background-color: ${({ theme }) => theme.COLOR_BACKGROUND_THREE};
  padding: 1rem;
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
  display: grid;
  align-items: center;
  grid-template-areas: "thumbnail title" "thumbnail description";
  justify-content: center;
  align-items: center;

  img {
    border-radius: ${({ theme }) => theme.CORNER_RADIUS_CARD_SM};
    margin-inline-end: 1em;
    grid-area: thumbnail;
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_LG};
  margin: auto 0 0;
  grid-area: title;
`;

const Description = styled.p`
  margin: 0 0 auto;
  grid-area: description;
`;

const Grid = styled.div`
  display: grid;
  grid-template-areas: ". ." ". .";
  grid-gap: 8px;
`;

stories.add(
  "Default",
  () => (
    <Grid>
      <Component
        isHovered={boolean("isHovered", false)}
        isActive={boolean("isActive", false)}
        isFocused={boolean("isFocused", false)}
        isSelected={boolean("isSelected", false)}
        isDisabled={boolean("isDisabled", false)}
        tabIndex="1"
      >
        <img
          src="https://source.unsplash.com/random/100x100"
          alt="test"
          width="100px"
          height="100px"
        />
        <Title>Item 1</Title>
        <Description>Lorem ipsum dolor sit amet</Description>
      </Component>
      <Component
        isHovered={boolean("isHovered", false)}
        isActive={boolean("isActive", false)}
        isFocused={boolean("isFocused", false)}
        isSelected={boolean("isSelected", false)}
        isDisabled={boolean("isDisabled", false)}
        tabIndex="2"
      >
        <img
          src="https://source.unsplash.com/random/100x100,"
          alt="test"
          width="100px"
          height="100px"
        />
        <Title>Item 2</Title>
        <Description>Lorem ipsum dolor sit amet</Description>
      </Component>
      <Component
        isHovered={boolean("isHovered", false)}
        isActive={boolean("isActive", false)}
        isFocused={boolean("isFocused", false)}
        isSelected={boolean("isSelected", false)}
        isDisabled={boolean("isDisabled", false)}
        tabIndex="3"
      >
        <img
          src="https://source.unsplash.com/random/100x100,,"
          alt="test"
          width="100px"
          height="100px"
        />
        <Title>Item 3</Title>
        <Description>Lorem ipsum dolor sit amet</Description>
      </Component>
      <Component
        isHovered={boolean("isHovered", false)}
        isActive={boolean("isActive", false)}
        isFocused={boolean("isFocused", false)}
        isSelected={boolean("isSelected", false)}
        isDisabled={boolean("isDisabled", false)}
        tabIndex="4"
      >
        <img
          src="https://source.unsplash.com/random/100x100,,,"
          alt="test"
          width="100px"
          height="100px"
        />
        <Title>Item 4</Title>
        <Description>Lorem ipsum dolor sit amet</Description>
      </Component>
    </Grid>
  ),
  {
    info:
      "_Selectable_ provides two methods of providing selectable-element states: A wrapping component with its own logic, _SelectableElement_, and a style function that provides default styles and hooks for modifying those styles, _selectableStyles_. _SelectableElement_ should provide normal selection behavior, including primary-click to toggle selection. _selectableStyles_ provides only the styles associated with an element's selection states: isSelected, isDisables, isHovered, etc."
  }
);
