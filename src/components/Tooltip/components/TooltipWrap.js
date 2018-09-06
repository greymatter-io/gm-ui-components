import styled, { css } from "styled-components";
import { ZINDEX_TOOLTIP, FONT_STACK_BASE } from "style/styleVariables";

const TooltipWrap = styled.div`
  display: inline-block;
  position: relative;
  font-family: ${FONT_STACK_BASE};
  :hover > :last-child {
    ${props =>
      !props.hideTooltip &&
      css`
        opacity: 1;
        visibility: visible;
        z-index: ${ZINDEX_TOOLTIP};
      `};
  }
`;

export default TooltipWrap;
