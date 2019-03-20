import styled, { css } from "styled-components";
import { keen } from "style/styleVariables";

const TooltipWrap = styled.div`
  display: inline-block;
  position: relative;
  font-family: ${props => props.theme.FONT_STACK_BASE};

  :hover > :last-child {
    ${props =>
      !props.hideTooltip &&
      css`
        opacity: 1;
        visibility: visible;
        z-index: ${props => props.theme.ZINDEX_TOOLTIP};
      `};
  }
`;

TooltipWrap.defaultProps = {
  theme: keen
};

export default TooltipWrap;
