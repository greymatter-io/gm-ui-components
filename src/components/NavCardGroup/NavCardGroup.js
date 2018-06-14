import { COLOR_WHITE, COLOR_BLACK } from "style/styleVariables";
import styled from "styled-components";
import { contrastColor, spacingScale } from "style/styleFunctions";

const COLOR_TAB_BACKGROUND_BASE = contrastColor(COLOR_WHITE, 0.175);

const NavCardGroup = styled.nav`
  display: flex;
  flex-flow: row wrap;
  color: ${contrastColor(COLOR_TAB_BACKGROUND_BASE)};
  padding: ${spacingScale(0.25)};
  overflow: hidden;
  position: relative;
  background-color: ${COLOR_BLACK};
`;

export default NavCardGroup;
