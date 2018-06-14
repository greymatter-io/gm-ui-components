import styled from "styled-components";

import { COLOR_ALT_BACKGROUND } from "style/styleVariables";
import { contrastColor, spacingScale } from "style/styleFunctions";

const COLOR_TAB_BACKGROUND_BASE = contrastColor(COLOR_ALT_BACKGROUND, 0.175);

const NavCardDetails = styled.dl`
  margin: 0 ${spacingScale(0.5)} ${spacingScale(0.5)} ${spacingScale(4)};
  line-height: 1.2;
  color: ${contrastColor(COLOR_TAB_BACKGROUND_BASE, 1)};
`;

export default NavCardDetails;
