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
