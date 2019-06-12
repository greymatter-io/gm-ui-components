import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { keenDark } from "style/theme";
import { spacingScale } from "style/styleFunctions";

const TAB_WIDTH_BASE = "1%";

const NavCardGroupWrap = styled.nav`
  display: flex;
  flex-flow: row wrap;
  padding: ${spacingScale(0.25)};
  position: relative;
  background: ${props => props.theme.COLOR_BACKGROUND_DEFAULT};
  /* Since the end-user will wrap NavCard with a link element,
     we need to style those child elements here */
  > * {
    flex: 1 1 ${TAB_WIDTH_BASE};
    display: flex;
    position: relative;
    align-items: stretch;
    min-height: ${spacingScale(8)};
    position: relative;
    text-decoration: none;

    &:active,
    &:active:hover,
    &.active,
    &.active:hover {
      div[class*="NavCardWrapper"] {
        ${props => props.theme.COLOR_BACKGROUND_THREE};
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

export default NavCardGroup;
