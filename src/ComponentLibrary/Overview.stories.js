import React from "react";
import styled from 'styled-components';

import { storiesOf } from "@storybook/react";
import LinkTo from '@storybook/addon-links/react';
import { FONT_STACK_BASE, FONT_STACK_BRAND, COLOR_KEYLINE } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const Introduction = styled.div`
  padding: 4vh 4vw;
  font-family: ${FONT_STACK_BASE};

  h1 {
    font-family: ${FONT_STACK_BRAND};
  }

  hr {
    margin: ${spacingScale(1)} 0;
    box-shadow: 0 1px 0 0 ${COLOR_KEYLINE};
    height: 1px;
    border: 0;
  }
`;

storiesOf("Overview|Introduction", module)
  .add("Overview", () => {
    return (
      <Introduction>
        <h1>Introduction</h1>
        <hr />
        <h2>Commonly Used Components</h2>
        <ul>
          <li><LinkTo kind="Components/Buttons" story="Button">Buttons!</LinkTo></li>
          <li><LinkTo kind="Components/Icons" story="Icon">Icons!</LinkTo></li>
          <li><LinkTo kind="Components" story="Input">Inputs!</LinkTo></li>
        </ul>

        <h2>Building a new component?</h2>
        <p>Check out the <LinkTo kind="Style Variables">style variables.</LinkTo></p>
        
        <p>Components are awesome</p>
        <p>You should use these awesome components.</p>
        <p>Awesome components include...</p>
        <hr />
        <ul>
          <li>This one</li>
          <li>This one</li>
          <li>This one</li>
          <li>This one</li>
          <li>This one</li>
          <li>This one</li>
          <li>And this one</li>
        </ul>
      </Introduction>
    );
  });
