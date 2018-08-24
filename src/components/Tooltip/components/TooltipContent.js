import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import {
  FONT_SIZE_BASE,
  ZINDEX_TOOLTIP,
  BORDER_RADIUS_BASE,
  COLOR_BACKGROUND_A,
  COLOR_KEYLINE_SOLID
} from "style/styleVariables";
import { readableColor } from "polished";

const TOOLTIP_BACKGROUND_COLOR = COLOR_BACKGROUND_A;

const TooltipContent = styled.div`
  background-color: ${TOOLTIP_BACKGROUND_COLOR};
  border-radius: ${BORDER_RADIUS_BASE};
  color: ${readableColor(TOOLTIP_BACKGROUND_COLOR)};
  box-shadow: 0 0 0 1px ${COLOR_KEYLINE_SOLID};
  font-size: ${FONT_SIZE_BASE};
  padding: ${spacingScale(1)};
  width: ${spacingScale(20)};
  z-index: ${ZINDEX_TOOLTIP};
  opacity: 0;
  position: absolute;
  text-align: left;
  transition: opacity 1s;
  visibility: hidden;
  white-space: normal;
  /* Position the tooltip */
  ${props => getPosition(props.position)};
`;

function getPosition(position) {
  switch (position) {
    case "top":
      return `
      bottom: 150%;
      left: 50%; 
      margin-left: -80px;`;
    case "left":
      return `
      right: 120%;
      top: -5px;`;
    case "right":
      return `
      top: -5px;
      left: 120%;`;
    case "bottom":
    default:
      return `
      top: 150%;
      left: 50%; 
      margin-left: -80px`;
  }
}

export default TooltipContent;
