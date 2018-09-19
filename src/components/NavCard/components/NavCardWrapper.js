import styled, { css } from "styled-components";
import { mix, darken } from "polished";

import { spacingScale } from "style/styleFunctions";

const backgroundColor = css`
  background-color: ${props =>
    mix(
      props.theme.OPACITY_15,
      props.theme.COLOR_BACKGROUND_B,
      props.theme.COLOR_BACKGROUND_C
    )};
`;
const backgroundColorHover = css`
  background-color: ${props =>
    darken(
      0.06,
      mix(
        props.theme.OPACITY_15,
        props.theme.COLOR_BACKGROUND_B,
        props.theme.COLOR_BACKGROUND_C
      )
    )};
`;

const TAB_WIDTH_BASE = "1%";

// Note: Edge requires the overflow: hidden property to maintian
// equal sized cards. flex-basis is not sufficient!
const NavCardWrapper = styled.div`
  ${backgroundColor};
  font-weight: ${props => props.theme.FONT_WEIGHT_REGULAR};
  font-family: ${props => props.theme.FONT_STACK_BASE};
  flex: 1 1 ${TAB_WIDTH_BASE};
  border-radius: ${props => props.theme.RADIUS_05};
  min-height: ${spacingScale(8)};
  margin: ${spacingScale(0.25)};
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
    border: 2px solid ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
    opacity: 0;
  }
  &:focus,
  &:hover {
    ${backgroundColorHover};
  }
`;

export default NavCardWrapper;
