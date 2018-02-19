import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { decipher, decipherDark } from "../../../style/styleVariables";

const StorybookWrapWrap = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colorBackground};
`;

export default function StorybookWrap({ children, storyTheme, theme }) {

  switch (props => props.storyTheme) {
    case 'decipherDark':
      storyTheme = decipherDark;
      break;
    default:
      storyTheme = decipher;
  }

  return (
    <ThemeProvider theme={theme}>
      <StorybookWrapWrap>
        {children}
      </StorybookWrapWrap>
    </ThemeProvider>
  );
}

StorybookWrap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  storyTheme: PropTypes.string,
  theme: PropTypes.object
};
