import styled from "styled-components";
import {
  ZINDEX_TOOLTIP,
  decipher
} from "../../../style/styleVariables.js";

const theme = decipher;

const TooltipContent = styled.div`
  background-color: ${theme.colorBackground};
  border-radius: ${theme.borderRadiusNormal};
  color: ${theme.colorContent};
  font-family: ${theme.fontStackNormal};
  font-size: ${theme.fontSizeSm};
  padding: ${theme.spacing};
  width: ${parseInt(theme.spacing, 10) * 20}px;
  z-index: ${ZINDEX_TOOLTIP};
  transition: ${theme.transitionNormal};
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

export default TooltipContent;
