import styled from "styled-components";
import { lighten } from "polished";

import { decipher, ZINDEX_TOOLTIP } from "../../../style/styleVariables";

const theme = decipher;

const TooltipWrap = styled.div`
  border-bottom: 1px solid ${lighten(0.85, theme.colorContent)};
  cursor: help;
  display: inline-block;
  position: relative;

  :hover > :last-child {
    opacity: 1;
    visibility: visible;
    z-index: ${ZINDEX_TOOLTIP};
  }
`;

export default TooltipWrap;
