import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import styled from "styled-components";
import withPropsCombinations from "react-storybook-addon-props-combinations";

import { Selectable as DefaultSelectable } from "./Selectable";

const stories = storiesOf("Components|Selectable", module);

const SelectableContent = styled.div`
  padding: 1rem;
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
  display: flex;
  align-items: center;

  img {
    border-radius: ${({ theme }) => theme.CORNER_RADIUS_CARD_SM};
    margin-inline-end: 1em;
  }
`;

function Selectable({ ...props }) {
  return (
    <DefaultSelectable {...props}>
      <SelectableElement>
        <img src="https://source.unsplash.com/random/100x100" />
        Content{" "}
      </SelectableElement>
    </DefaultSelectable>
  );
}

stories
  .add(
    "Gallery",
    withPropsCombinations(Selectable, {
      isHovered: [false, true],
      isActive: [false, true],
      isFocused: [false, true],
      isSelected: [false, true],
      isDisabled: [false, true]
    }),
    {
      info: {
        text: "Add component description here. Accepts markdown."
      }
    }
  )
  .add(
    "Default",
    () => (
      <DefaultSelectable
        isHovered={boolean("isHovered", false)}
        isActive={boolean("isActive", false)}
        isFocused={boolean("isFocused", false)}
        isSelected={boolean("isSelected", false)}
        isDisabled={boolean("isDisabled", false)}
      >
        <SelectableContent>
          <img src="https://source.unsplash.com/random/100x100" />
          Content{" "}
        </SelectableContent>
      </DefaultSelectable>
    ),
    {
      info: {
        text: ""
      }
    }
  );
