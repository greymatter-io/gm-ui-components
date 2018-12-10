import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import {
  FONT_STACK_BASE,
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
  text-align: left;
  transition: opacity 1s;
  opacity: ${props => (props.visible ? 1 : 0)};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  white-space: normal;
  font-family: ${FONT_STACK_BASE};
  margin: ${spacingScale(1)};
`;

export default TooltipContent;
