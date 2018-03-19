import styled from "styled-components";
import { spacingScale, contrastColor } from '../../../style/styleFunctions';
import {
  FONT_SIZE_BASE,
  ZINDEX_TOOLTIP,
  BORDER_RADIUS_BASE,
  COLOR_CONTENT_BACKGROUND
} from "../../../style/styleVariables";

const TOOLTIP_BACKGROUND_COLOR = contrastColor(COLOR_CONTENT_BACKGROUND, 1);

const TooltipContent = styled.div`
  background-color: ${TOOLTIP_BACKGROUND_COLOR};
  border-radius: ${BORDER_RADIUS_BASE};
  color: ${contrastColor(TOOLTIP_BACKGROUND_COLOR, 1)};
  font-size: ${FONT_SIZE_BASE};
  opacity: 0;
  padding: ${spacingScale(1)};
  position: absolute;
  text-align: left;
  transition: opacity 1s;
  visibility: hidden;
  white-space: normal;
  width: ${spacingScale(20)};
  z-index: ${ZINDEX_TOOLTIP};
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
