import styled from "styled-components";
import { ZINDEX_TOOLTIP, FONT_STACK_BASE } from "style/styleVariables";

const TooltipWrap = styled.div`
  cursor: ${props => (props.hideTooltip ? "default" : "help")};
  display: inline-block;
  position: relative;
  font-family: ${FONT_STACK_BASE};
  :hover > :last-child {
    ${props =>
      props.hideTooltip
        ? ""
        : `opacity: 1;
      
    visibility: visible;
    z-index: ${ZINDEX_TOOLTIP};`};
  }
`;

export default TooltipWrap;
