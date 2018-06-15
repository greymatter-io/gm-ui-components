import styled from "styled-components";
import { darken } from "polished";

import { spacingScale, contrastColor } from "style/styleFunctions";
import {
  COLOR_CONTENT_BACKGROUND,
  FONT_WEIGHT_REGULAR,
  BORDER_RADIUS_BASE,
  FONT_STACK_BASE,
  COLOR_HIGHLIGHT
} from "style/styleVariables";

const TAB_BASE_COLOR = contrastColor(COLOR_CONTENT_BACKGROUND, 0.8);
const TAB_WIDTH_BASE = "1%";

// Note: Edge requires the overflow: hidden property to maintian
// equal sized cards. flex-basis is not sufficient!
const NavCardWrapper = styled.div`
  font-weight: ${FONT_WEIGHT_REGULAR};
  font-family: ${FONT_STACK_BASE};
  flex: 1 1 ${TAB_WIDTH_BASE};
  padding: ${spacingScale(0.5)};
  position: relative;
  transition: all 0.15s ease;
  background-color: ${TAB_BASE_COLOR};
  border-radius: ${BORDER_RADIUS_BASE};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: ${spacingScale(10)};
  margin: ${spacingScale(0.25)};
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 4px;
    border: 2px solid ${COLOR_HIGHLIGHT};
    opacity: 0;
  }
  &:focus,
  &:hover {
    background-color: ${darken(0.06, TAB_BASE_COLOR)};
  }
`;

export default NavCardWrapper;
