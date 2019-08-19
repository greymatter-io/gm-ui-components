import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import styled from "styled-components";

import selectable from "./Selectable";

const stories = storiesOf("Components|Selectable", module);

const Component = styled.div`
  ${selectable}

  padding: 1rem;
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
  display: grid;
  align-items: center;
  grid-template-areas: "thumbnail title" "thumbnail description";
  justify-content: center;
  align-items: center;
  background: #fafafa;
  border-radius: ${({ theme }) => theme.CORNER_RADIUS_CARD_DEFAULT};

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

stories.add(
  "Default",
  () => (
    <Component
      isHovered={boolean("isHovered", false)}
      isActive={boolean("isActive", false)}
      isFocused={boolean("isFocused", false)}
      isSelected={boolean("isSelected", false)}
      isDisabled={boolean("isDisabled", false)}
    >
      <img src="https://source.unsplash.com/random/100x100" alt="test" />
      <Title>Content</Title>
      <Description>Description</Description>
    </Component>
  ),
  {
    info: {
      text: ""
    }
  }
);
