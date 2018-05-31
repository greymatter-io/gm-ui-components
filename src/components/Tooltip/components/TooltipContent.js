import styled from "styled-components";
import {
  COLOR_WHITE,
  FONT_SIZE_BASE,
  ZINDEX_TOOLTIP
} from "style/styleVariables";

const TooltipContent = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 6px;
  color: ${COLOR_WHITE};
  font-size: ${FONT_SIZE_BASE};
  opacity: 0;
  padding: 10px;
  position: absolute;
  text-align: left;
  transition: opacity 1s;
  visibility: hidden;
  white-space: normal;
  width: 160px;
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
