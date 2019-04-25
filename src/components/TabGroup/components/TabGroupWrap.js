import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";
import { keen } from "style/styleVariables";

const TabGroupWrap = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  font-family: ${props => props.theme.FONT_STACK_BASE};
  color: ${props => props.theme.COLOR_CONTENT};
  min-height: ${spacingScale(4)};
`;

TabGroupWrap.defaultProps = {
  theme: keen
};

export default TabGroupWrap;
