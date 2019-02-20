import styled from "styled-components";
import { mix, darken } from "polished";

import { spacingScale } from "style/styleFunctions";
import {
  OPACITY_15,
  COLOR_BACKGROUND_B,
  COLOR_BACKGROUND_C,
  COLOR_INTENT_HIGHLIGHT,
  FONT_WEIGHT_BASE,
  BORDER_RADIUS_BASE,
  FONT_STACK_BASE
} from "style/styleVariables";

const COLOR_TAB_BACKGROUND_BASE = mix(
  OPACITY_15,
  COLOR_BACKGROUND_B,
  COLOR_BACKGROUND_C
);

const TAB_WIDTH_BASE = "1%";

// Note: Edge requires the overflow: hidden property to maintian
// equal sized cards. flex-basis is not sufficient!
const NavCardWrapper = styled.div`
  font-weight: ${FONT_WEIGHT_BASE};
  font-family: ${FONT_STACK_BASE};
  flex: 1 1 ${TAB_WIDTH_BASE};
  background-color: ${COLOR_TAB_BACKGROUND_BASE};
  border-radius: ${BORDER_RADIUS_BASE};
  min-height: ${spacingScale(8)};
  position: relative;
  transition: all 0.15s ease;
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
    border: 2px solid ${COLOR_INTENT_HIGHLIGHT};
    opacity: 0;
  }
  &:focus,
  &:hover {
    background-color: ${darken(0.06, COLOR_TAB_BACKGROUND_BASE)};
  }
`;

export default NavCardWrapper;
