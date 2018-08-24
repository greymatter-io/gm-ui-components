import styled from "styled-components";
import { mix } from 'polished';

import { OPACITY_15, COLOR_BACKGROUND_B, COLOR_BACKGROUND_C, FONT_SIZE_SM } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";
import { readableColor } from "polished";

const COLOR_TAB_BACKGROUND_BASE = mix(OPACITY_15, COLOR_BACKGROUND_B, COLOR_BACKGROUND_C);

const NavCardDetails = styled.dl`
  margin: 0 ${spacingScale(0.5)} ${spacingScale(0.25)} ${spacingScale(4.5)}; /* Odd number required to align with title */
  font-size: ${FONT_SIZE_SM};
  color: ${readableColor(COLOR_TAB_BACKGROUND_BASE)};
  line-height: 1.2;

  &:last-child {
    margin-bottom: ${spacingScale(1)};
  }
`;

export default NavCardDetails;
