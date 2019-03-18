import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";

const TooltipContent = styled.div`
  background-color: ${props => props.theme.COLOR_BACKGROUND_A};
  border-radius: ${props => props.theme.RADIUS_05};
  box-shadow: 0 0 0 1px ${props => props.theme.COLOR_KEYLINE_SOLID};
  color: ${props => props.theme.COLOR_CONTENT};
  font-size: ${props => props.theme.FONT_SIZE_BASE};
  z-index: ${props => props.theme.ZINDEX_TOOLTIP};
  padding: ${spacingScale(1)};
  width: ${spacingScale(20)};
  opacity: 0;
  position: absolute;
  text-align: left;
  transition: opacity 0.5s, visibility 0.5s;
  white-space: normal;
  font-family: ${props => props.theme.FONT_STACK_BASE};
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
