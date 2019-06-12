import styled, { css } from "styled-components";
import { mix, darken } from "polished";

import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";

const backgroundColorHover = css`
  background-color: ${props =>
    darken(
      0.06,
      mix(
        props.theme.OPACITY_LIGHTEST,
        props.theme.COLOR_BACKGROUND_TWO,
        props.theme.COLOR_BACKGROUND_THREE
      )
    )};
`;

const TAB_WIDTH_BASE = "1%";

// Note: Edge requires the overflow: hidden property to maintian
// equal sized cards. flex-basis is not sufficient!
const NavCardWrapper = styled.div`
  background: ${props => props.theme.COLOR_BACKGROUND_TWO};
  font-weight: ${props => props.theme.FONT_WEIGHT_REGULAR};
  font-family: ${props => props.theme.FONT_STACK_DEFAULT};
  flex: 1 1 ${TAB_WIDTH_BASE};
  border-radius: ${props => props.theme.CORNER_RADIUS_CARD_SM};
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
    border: 2px solid ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
    opacity: 0;
  }
  &:focus,
  &:hover {
    background: ${props => props.theme.COLOR_BACKGROUND_THREE};
  }
`;

NavCardWrapper.defaultProps = {
  theme: keen
};

export default NavCardWrapper;
