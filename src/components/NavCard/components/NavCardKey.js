import styled from "styled-components";
import { readableColor, mix } from 'polished';

import { spacingScale } from "style/styleFunctions";
import { OPACITY_70, OPACITY_15, COLOR_BACKGROUND_B, COLOR_BACKGROUND_C } from "style/styleVariables";

const COLOR_TAB_BACKGROUND_BASE = mix(OPACITY_15, COLOR_BACKGROUND_B, COLOR_BACKGROUND_C);

const NavCardKey = styled.dt`
  color: ${readableColor(COLOR_TAB_BACKGROUND_BASE)};
  opacity: ${OPACITY_70};
  padding-right: ${spacingScale(1)};
  display: inline-block;
`;

export default NavCardKey;
