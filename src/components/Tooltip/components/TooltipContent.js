import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { keen } from "style/theme";

const TooltipContent = styled.div`
  background-color: ${props => props.theme.COLOR_BACKGROUND_DEFAULT};
  border-radius: ${props => props.theme.CORNER_RADIUS_SHARP};
  box-shadow: 0 0 0 1px ${props => props.theme.COLOR_KEYLINE_DEFAULT_SOLID};
  color: ${props => props.theme.COLOR_CONTENT_DEFAULT};
  font-size: ${props => props.theme.FONT_SIZE_TEXT_DEFAULT};
  z-index: ${props => props.theme.ZINDEX_TOOLTIP};
  padding: ${spacingScale(1)};
  width: ${spacingScale(20)};
  opacity: 0;
  position: absolute;
  text-align: left;
  transition: opacity 0.5s, visibility 0.5s;
  white-space: normal;
  font-family: ${props => props.theme.FONT_STACK_DEFAULT};
  margin: ${spacingScale(1)};
  word-wrap: break-word;

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

TooltipContent.defaultProps = {
  theme: keen
};

export default TooltipContent;
