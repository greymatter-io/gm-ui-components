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
  border: 1px solid ${COLOR_KEYLINE_SOLID};
  box-shadow: 0 4px 16px -4px rgba(0, 0, 0, 0.05),
    0 8px 32px -16px rgba(0, 0, 0, 0.25);
  font-size: ${FONT_SIZE_BASE};
  padding: ${spacingScale(1)};
  width: ${spacingScale(20)};
  z-index: ${ZINDEX_TOOLTIP};
  text-align: left;
  transition: opacity 0.5s, visibility 0.5s;
  white-space: normal;
  font-family: ${FONT_STACK_BASE};
  margin: ${spacingScale(1)};

  ${props =>
    props.visible
      ? `
          opacity: 1;
          visibility: visible;
        `
      : `
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        `};
`;

export default TooltipContent;
