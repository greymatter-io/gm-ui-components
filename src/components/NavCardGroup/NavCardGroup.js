import styled, { css } from "styled-components";
import { mix, darken } from "polished";

import { keenDark } from "style/theme";
import { spacingScale } from "style/styleFunctions";

const TAB_WIDTH_BASE = "1%";

const NavCardGroup = styled.nav`
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

NavCardGroup.defaultProps = {
  theme: keenDark
};

export default NavCardGroup;
