import styled from "styled-components";

import { COLOR_WHITE, FONT_SIZE_BASE } from "style/styleVariables";
import { contrastColor, spacingScale } from "style/styleFunctions";

const COLOR_TAB_BACKGROUND_BASE = contrastColor(COLOR_WHITE, 0.175);

const NavCardDetails = styled.dl`
  margin: 0 ${spacingScale(0.5)} ${spacingScale(0.5)} ${spacingScale(4.5)};
  line-height: 1.2;
  font-size: ${FONT_SIZE_BASE};
  color: ${contrastColor(COLOR_TAB_BACKGROUND_BASE, 1)};
`;

export default NavCardDetails;
