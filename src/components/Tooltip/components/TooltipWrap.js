import styled from "styled-components";
import { COLOR_BLACK, COLOR_WHITE, ZINDEX_TOOLTIP } from "../../../style/styleVariables";

const TooltipWrap = styled.div`
  border-bottom: 1px solid ${COLOR_BLACK.mix(COLOR_WHITE, 0.85).string()};
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
