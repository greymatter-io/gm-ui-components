import styled from "styled-components";
import {
  ZINDEX_TOOLTIP,
  decipherDark
} from "../../../style/styleVariables.js";

const TooltipContent = styled.div`
  background-color: ${props => props.theme.colorBackground};
  border-radius: ${props => props.theme.borderRadiusNormal};
  color: ${props => props.theme.colorContent};
  font-family: ${props => props.theme.fontStackNormal};
  font-size: ${props => props.theme.fontSizeSm};
  padding: ${props => props.theme.spacing};
  width: ${parseInt(props => props.theme.spacing, 10) * 20}px;
  z-index: ${ZINDEX_TOOLTIP};
  transition: ${props => props.theme.transitionNormal};
  opacity: 0;
  position: absolute;
  text-align: left;
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

TooltipContent.defaultProps = {
  theme: decipherDark
}


export default TooltipContent;
