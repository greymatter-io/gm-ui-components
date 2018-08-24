import styled from "styled-components";
import { mix, darken } from "polished";

import {
  OPACITY_15,
  COLOR_BACKGROUND_B,
  COLOR_BACKGROUND_C,
 } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const COLOR_TAB_BACKGROUND_BASE = mix(OPACITY_15, COLOR_BACKGROUND_B, COLOR_BACKGROUND_C);

const TAB_WIDTH_BASE = "1%";

const NavCardGroup = styled.nav`
  display: flex;
  flex-flow: row wrap;
  padding: ${spacingScale(0.25)};
  position: relative;
  background-color: ${COLOR_BACKGROUND_C};
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
    /* When the link element is active, make NavCard's green border pseudo-element
       visible and style the NavCard background color. */
    &:active,
    &:active:hover,
    &.active,
    &.active:hover {
      div[class*="NavCardWrapper"] {
        &:after {
          opacity: 1;
        }
        background-color: ${darken(0.1, COLOR_TAB_BACKGROUND_BASE)};
      }
    }
  }
`;

export default NavCardGroup;
