import styled from "styled-components";
import { FONT_STACK_BASE } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const TabGroupWrap = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  font-family: ${FONT_STACK_BASE};
  min-height: ${spacingScale(4)};
`;

export default TabGroupWrap;
