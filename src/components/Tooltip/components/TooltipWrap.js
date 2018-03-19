import styled from "styled-components";
import {
  COLOR_BLACK,
  COLOR_WHITE,
  ZINDEX_TOOLTIP
} from "../../../style/styleVariables";
import { mix } from "polished";

const TooltipWrap = styled.div`
  border-bottom: 1px solid ${mix(0.2, COLOR_BLACK, COLOR_WHITE)};
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
