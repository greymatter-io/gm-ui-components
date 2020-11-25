import styled, { css } from "styled-components";
import { keen } from "style/theme";

const TooltipWrap = styled.div`
  display: inline-block;
  position: relative;
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
`;

TooltipWrap.defaultProps = {
  theme: keen
};

export default TooltipWrap;
