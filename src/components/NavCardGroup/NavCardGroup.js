import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

import { keenDark } from "style/theme";

const TAB_WIDTH_BASE = "1%";

const NavCardGroupWrap = styled.nav`
  display: flex;
  flex-flow: row wrap;
  padding: 0.25rem;
  position: relative;
  background: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};
  /* Since the end-user will wrap NavCard with a link element,
     we need to style those child elements here */
  > * {
    flex: 1 1 ${TAB_WIDTH_BASE};
    display: flex;
    position: relative;
    align-items: stretch;
    min-height: 8rem;
    position: relative;
    text-decoration: none;

    &:active,
    &:active:hover,
    &.active,
    &.active:hover {
      div[class*="NavCardWrap"] {
        ${({ theme }) => theme.COLOR_BACKGROUND_THREE};
      }
    }
  }
`;

function NavCardGroup({ useContextTheme, children }) {
  return (
    <ThemeProvider theme={props => (useContextTheme ? props : keenDark)}>
      <NavCardGroupWrap>{children}</NavCardGroupWrap>
    </ThemeProvider>
  );
}

NavCardGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  useContextTheme: PropTypes.bool
};

export default NavCardGroup;
