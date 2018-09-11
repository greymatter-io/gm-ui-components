import styled from "styled-components";

const TooltipWrap = styled.div`
  cursor: ${props => (props.hideTooltip ? "default" : "help")};
  display: inline-block;
  position: relative;
  font-family: ${props => props.theme.FONT_STACK_BASE};
  :hover > :last-child {
    ${props =>
      props.hideTooltip
        ? ""
        : `opacity: 1;
      
    visibility: visible;
    z-index: ${props => props.theme.ZINDEX_TOOLTIP};`};
  }
`;

export default TooltipWrap;
