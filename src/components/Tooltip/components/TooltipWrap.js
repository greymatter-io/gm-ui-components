import styled from "styled-components";
import { mix } from "polished";

import { COLOR_BLACK, COLOR_WHITE, ZINDEX_TOOLTIP } from "style/styleVariables";

const TooltipWrap = styled.div`
  border-bottom: 1px solid ${mix(0.85, COLOR_WHITE, COLOR_BLACK)};
  cursor: ${props => (props.hideTooltip ? "default" : "help")};
  display: inline-block;
  position: relative;

  & > * {
    height: 100%;
    width: 100%;
  }

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
