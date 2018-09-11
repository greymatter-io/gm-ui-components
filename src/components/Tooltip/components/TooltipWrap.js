import styled, { css } from "styled-components";

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
        z-index: ${props => props.theme.ZINDEX_TOOLTIP};`};
      `};
  }
`;

export default TooltipWrap;
