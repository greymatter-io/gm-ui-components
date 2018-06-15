import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_CONTENT_BACKGROUND
} from "style/styleVariables";
import styled from "styled-components";
import { contrastColor, spacingScale } from "style/styleFunctions";
import { darken } from "polished";

const TAB_BASE_COLOR = contrastColor(COLOR_CONTENT_BACKGROUND, 0.8);
const COLOR_TAB_BACKGROUND_BASE = contrastColor(COLOR_WHITE, 0.175);
const TAB_WIDTH_BASE = "1%";

const NavCardGroup = styled.nav`
  display: flex;
  flex-flow: row wrap;
  color: ${contrastColor(COLOR_TAB_BACKGROUND_BASE)};
  padding: ${spacingScale(0.25)};
  overflow: hidden;
  position: relative;
  background-color: ${COLOR_BLACK};
  /* Since the end-user will wrap NavCard with a link element,
     we need to style those child elements here */
  > * {
    flex: 1 1 ${TAB_WIDTH_BASE};
    display: flex;
    position: relative;
    align-items: stretch;
    min-height: ${spacingScale(10)};
    position: relative;
    text-decoration: none;
    /* When the link element is active, make NavCard's green border pseudo-element
       visible and style the NavCard background color. */
  }
`;

export default NavCardGroup;
