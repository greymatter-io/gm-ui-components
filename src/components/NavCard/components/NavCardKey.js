import styled from "styled-components";

import { contrastColor } from "style/styleFunctions";
import { COLOR_ALT_BACKGROUND } from "style/styleVariables";

const COLOR_TAB_BACKGROUND_BASE = contrastColor(COLOR_ALT_BACKGROUND, 0.175);

const NavCardKey = styled.dt`
  color: ${contrastColor(COLOR_TAB_BACKGROUND_BASE, 1)};
  opacity: 0.8;
  padding-right: 0.5em;
  display: inline-block;
`;

export default NavCardKey;
