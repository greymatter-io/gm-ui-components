import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { keen } from "style/theme";
import GlobalStyles from "style/GlobalStyles";

const ComponentArea = styled.div``;

const Wrap = styled.div`
  transition: color 0.15s ease, background 0.15s ease;
  background-color: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};

  > * {
    display: contents;
  }

  /* Target only the canvas tab in Storybook */
  #root > &:first-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLOR_BACKGROUND_TWO};
    min-height: 100vh;

    > * {
      display: block;
      padding: 1rem;
      box-shadow: 0 0 0 1px ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
      background-color: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};
      border-radius: 2px;
      max-width: 100vw;
    }
  }
`;

function StoryContainer({ children }) {
  return (
    <>
      <GlobalStyles />
      <Wrap>
        <ComponentArea>{children}</ComponentArea>
      </Wrap>
    </>
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
