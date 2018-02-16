import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { decipher } from "../../../style/styleVariables";

const StorybookWrapWrap = styled.div`
  height: 100vh;
  width: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function StorybookWrap({ children, theme }) {
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
  theme: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ])
};

StorybookWrap.defaultProps = {
  theme: decipher
};
