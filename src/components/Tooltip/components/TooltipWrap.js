import styled from "styled-components";
import { mix } from "polished";
import { ZINDEX_TOOLTIP, COLOR_CONTENT, COLOR_CONTENT_BACKGROUND } from "../../../style/styleVariables";

const TooltipWrap = styled.div`
  border-bottom: 1px solid ${mix(0.15, COLOR_CONTENT, COLOR_CONTENT_BACKGROUND)};
  cursor: ${props => (props.hideTooltip ? "default" : "help")};
  display: inline-block;
  position: relative;
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
