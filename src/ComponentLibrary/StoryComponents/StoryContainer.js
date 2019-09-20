import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { keen } from "style/theme";
import GlobalStyles from "style/GlobalStyles";

const ComponentArea = styled.div``;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.15s ease, background 0.15s ease;
  background-color: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};

  > * {
    display: contents;
  }

  /* Target only the canvas tab in Storybook */
  html > body > #root > &:first-child:last-child {
    background-color: ${({ theme }) => theme.COLOR_BACKGROUND_TWO};
    min-height: 100vh;
    padding: 2rem;

    > * {
      display: block;
      padding: 1rem;
      border: 1px solid ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
      background-color: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};
      border-radius: 2px;
    }
  }
`;

function StoryContainer({ children }) {
  return (
    <Wrap>
      <GlobalStyles />
      <ComponentArea>{children}</ComponentArea>
    </Wrap>
  );
}

StoryContainer.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.object
};

StoryContainer.defaultProps = {
  theme: keen
};

export default StoryContainer;
