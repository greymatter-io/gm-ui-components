import React from "react";
import styled from "styled-components";
import { darken } from "polished";

import { storiesOf } from "@storybook/react";
import {
  FONT_STACK_BASE,
  FONT_STACK_BRAND,
  COLOR_KEYLINE,
  COLOR_INTENT_HIGHLIGHT
} from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const Introduction = styled.div`
  padding: 4vh 4vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  margin: auto;
  max-width: 30em;
  font-family: ${FONT_STACK_BASE};

  h1 {
    font-family: ${FONT_STACK_BRAND};
    margin: 0;
  }

  h2 {
    margin: 1em 0 0;
  }

  hr {
    margin: ${spacingScale(1)} 0;
    box-shadow: 0 1px 0 0 ${COLOR_KEYLINE};
    height: 1px;
    border: 0;
  }

  a {
    color: ${darken(0.07, COLOR_INTENT_HIGHLIGHT)};
    text-decoration: underline;
    padding: 0 0.25em;

    &:hover {
      text-decoration: none;
    }
  }
`;

storiesOf(" Overview|Introduction", module).add(
  "Introduction",
  () => {
    return (
      <Introduction>
        <h1>Introduction</h1>
        <p>
          For detailed readme, issues, suggestions, and related projects, view
          the
          <a href="https://github.com/DecipherNow/gm-ui-components">
            Project Source
          </a>
          on GitHub.
        </p>
      </Introduction>
    );
  },
  {
    info: { header: false }
  }
);
